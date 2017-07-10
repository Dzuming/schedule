import { TestBed, inject } from '@angular/core/testing';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';

import { RestService } from './rest.service';

describe('RestService', () => {
  let scheduleObjects: Object[] = [{ 'schedule': { '12-07-2017': { 'Czytanie': 21 }, '13-07-2017': { 'Czytanie': 11 } } }];
  let afDbMock = {
    list: () => Observable.of(scheduleObjects.map(schedule => { return schedule })),
  };
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [RestService, { "provide": AngularFireDatabase, "useValue": afDbMock }]
    });
  });

  it('should ...', inject([RestService], (service: RestService) => {
    expect(service).toBeTruthy();
  }));

  it('Call getSchedule to return Observable of schedule',
    inject([
      RestService
    ],
      (restService: RestService) => {
        let scheduleObs = restService.getShedule();

        scheduleObs.subscribe(schedule => {
          expect(schedule.length).toEqual(scheduleObjects.length);
          expect(schedule[0]).toEqual(scheduleObjects[0]);
        });
      })
  );
  it(' save new object to schedule',
    inject([
      RestService
    ],
      (restService: RestService) => {
        let object = restService.saveShedule({ 'Czytanie': 3 });
        expect(object).toEqual(scheduleObjects.length);
      })
  );
});

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ScheduleEffects } from './schedule.effect';
import { GOT_FIREBASE_ARRAY } from '../actions/schedule.action';
describe('Schedule Effect', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ScheduleEffects, 
      { "provide": AngularFireDatabase, "useValue": [{'sss':'fff'}] }
    ]
  }));
  let runner: EffectsRunner;
  let scheduleEffects: ScheduleEffects;
  beforeEach(inject([
    EffectsRunner, ScheduleEffects, 
  ],
  (_runner, _scheduleEffects) => {
    runner = _runner;
    scheduleEffects = _scheduleEffects;
  }
));
// it('should return a GOT_FIREBASE_ARRAY action ', () => {
//   spyOn(scheduleEffects, 'ddd')
//           .and.returnValue(Observable.of(['C#']));
//   runner.queue({ type: GOT_FIREBASE_ARRAY });
// console.log(runner.queue({ type: GOT_FIREBASE_ARRAY }))
//   scheduleEffects.pullArrayFromFirebase$.subscribe(result => {
//     console.log(result)
//     expect(result).toEqual({ type: GOT_FIREBASE_ARRAY });
//   });
// });
});
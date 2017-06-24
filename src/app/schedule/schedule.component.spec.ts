import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {StoreModule} from "@ngrx/store";
import { Store } from '@ngrx/store';

import {MainReducer} from "../state-managements/reducers/main.reducer";
import {State} from "../state-managements/states/main.state";
import { ScheduleComponent } from './schedule.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent, ScheduleTableComponent ],
       imports: [StoreModule.provideStore({MainReducer})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {StoreModule} from "@ngrx/store";
import { Store } from '@ngrx/store';
import {ScheduleReducer} from "../state-managements/reducers/schedule.reducer";
import {State} from "../state-managements/states/schedule.state";
import { ScheduleComponent } from './schedule.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { PULL_ARRAY_FROM_FIREBASE } from "app/state-managements/actions/schedule.action";
describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent, ScheduleTableComponent ],
       imports: [StoreModule.provideStore({ScheduleReducer})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create schedule component', () => {
    expect(component).toBeTruthy();
  });
});
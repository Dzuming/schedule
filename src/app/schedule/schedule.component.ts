import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PULL_ARRAY_FROM_FIREBASE } from '../state-managements/actions/schedule.action';
import { State } from "app/state-managements/states/schedule.state";
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: any[];
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.getSchedule()

  }
  getSchedule() {
    this.store.dispatch({ type: PULL_ARRAY_FROM_FIREBASE });
    this.store.select('ScheduleReducer')
      .subscribe((data: State) => {
          this.schedule = data.schedule;
      });
  }

}

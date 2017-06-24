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
    this.store.dispatch({ type: PULL_ARRAY_FROM_FIREBASE });
     this.store.select('MainReducer')
      .subscribe((data: State) => {
        if (data.payloadArray.length > 0) {
          this.schedule = data.payloadArray;
        }
      });
  }

}

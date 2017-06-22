import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Store } from '@ngrx/store';
import { PULL_ARRAY_FROM_FIREBASE } from '../state-managements/actions/main.action';
import { State } from "app/state-managements/states/main.state";
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: any[];
  constructor(
    private store: Store<State>,
    private db: AngularFireDatabase
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

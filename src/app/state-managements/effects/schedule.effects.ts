import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class ScheduleEffects {

    @Effect() pullArrayFromFirebase$ = this.action$
    .ofType('PULL_ARRAY_FROM_FIREBASE')
    .switchMap( () => {
        return this.db.list('/schedule')
        .switchMap(result =>
          Observable.of({type: "GOT_FIREBASE_ARRAY", payload: {pulledArray:  result}})
          )
    })

    constructor(
        private action$: Actions, 
        private db: AngularFireDatabase) { }
}
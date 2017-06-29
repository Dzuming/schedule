import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ScheduleEffects {
constructor(
        private action$: Actions) { }

    // @Effect() pullArrayFromFirebase$ = this.action$
    // .ofType('PULL_ARRAY_FROM_FIREBASE')
    // .switchMap( () => {
    //     return this.db.list('/schedule')
    //     .switchMap(result =>
    //       Observable.of({type: "GOT_FIREBASE_ARRAY", payload: {schedule:  result}})
    //       )
    // })

    
}
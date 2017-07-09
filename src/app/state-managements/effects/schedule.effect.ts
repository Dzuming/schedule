import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "app/shared/services/rest.service";

@Injectable()
export class ScheduleEffects {
constructor(
        private restService: RestService,
        private action$: Actions) { }

    @Effect() pullArrayFromFirebase$ = this.action$
    .ofType('PULL_ARRAY_FROM_FIREBASE')
    .switchMap( () => {
        return this.restService.getShedule()
        .switchMap(result =>
          Observable.of({type: "GOT_FIREBASE_ARRAY", payload: {schedule:  result}})
          )
    })

    
}
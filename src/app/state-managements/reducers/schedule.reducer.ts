import { ActionReducer, Action } from '@ngrx/store';
import { GOT_FIREBASE_ARRAY } from "../actions/schedule.action";
import { State, intitialState } from "../states/schedule.state";
export const ScheduleReducer: ActionReducer<State> =
  function (state = intitialState, action: Action) {

    switch (action.type) {

      case GOT_FIREBASE_ARRAY: {
         if (action.payload.pulledArray === undefined) {
           return;
         }
        return Object.assign({}, state, {
          payloadArray: action.payload.pulledArray
        });
      }
      default: {
        return state;
      }
    }
  }
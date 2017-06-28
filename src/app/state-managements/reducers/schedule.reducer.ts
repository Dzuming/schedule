import { ActionReducer, Action } from '@ngrx/store';
import { GOT_FIREBASE_ARRAY } from "../actions/schedule.action";
import { State, intitialState } from "../states/schedule.state";
export const ScheduleReducer: ActionReducer<State> =
  function (state = intitialState, action: Action) {

    switch (action.type) {

      case GOT_FIREBASE_ARRAY: {
        return Object.assign({}, state, {
          schedule: action.payload.schedule
        });
      }
      default: {
        return state;
      }
    }
  }
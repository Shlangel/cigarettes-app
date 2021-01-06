import { Action, createReducer, on, props } from '@ngrx/store';
import { CurrentSmokingState, CurrentSmokingStateInterface } from '../interfaces';
import * as CurrentSmokingActions from './current-smoking.actions';

const initialState: CurrentSmokingStateInterface = {
  name: "Nothing",
  count: 0,
};

export const currentSmokingReducer = createReducer(
  initialState,
  on(CurrentSmokingActions.createPack, (state, props) => ({
    ...state,
    name: props.name,
    count: props.count,
  }))
);

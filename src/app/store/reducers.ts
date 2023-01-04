import { Action, createReducer, on } from '@ngrx/store';

import { CounterStateInterface } from 'src/app/types/counterState.interface';
import {
  changeUpdatedAt,
  clear,
  decrease,
  increase,
} from 'src/app/store/action/counter.action';

export const initialState: CounterStateInterface = {
  count: 0,
  updatedAt: null,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({ ...state, count: state.count + 1 })),
  on(decrease, (state) => ({ ...state, count: state.count - 1 })),
  on(clear, (state) => ({ ...state, count: 0 })),
  on(changeUpdatedAt, (state, { updatedAt }) => ({ ...state, updatedAt }))
);

export function reducers(state: CounterStateInterface, action: Action) {
  return counterReducer(state, action);
}

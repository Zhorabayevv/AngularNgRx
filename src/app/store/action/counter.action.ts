import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/store/actionTypes";

export const increase = createAction(
  ActionTypes.INCREASE
);
export const decrease = createAction(
  ActionTypes.DECREASE
);
export const clear = createAction(
  ActionTypes.CLEAR
);
export const changeUpdatedAt = createAction(
  ActionTypes.CHANGEUPDATEDAT,
  props<{ updatedAt: number }>()
);

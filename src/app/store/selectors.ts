import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CounterStateInterface } from "src/app/types/counterState.interface";


export const featureSelector = createFeatureSelector<CounterStateInterface>('counter');

export const countSelector = createSelector(
  featureSelector,
  (counterState: CounterStateInterface) => counterState.count
)

export const updatedAtSelector = createSelector(
  featureSelector,
  (counterState: CounterStateInterface) => counterState.updatedAt
  )

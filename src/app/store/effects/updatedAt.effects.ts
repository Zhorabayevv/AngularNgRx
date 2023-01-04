import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

import { changeUpdatedAt, clear, decrease, increase } from "src/app/store/action/counter.action";

@Injectable()
export class CounterEffects {
  updatedAt$ = createEffect(
    () => this.actions$.pipe(
      ofType(increase, decrease, clear),
      map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    )
  )

  constructor(private actions$: Actions) {}

}

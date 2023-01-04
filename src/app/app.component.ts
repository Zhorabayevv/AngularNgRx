import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { clear, decrease, increase } from 'src/app/store/action/counter.action';
import { countSelector } from 'src/app/store/selectors';
import { updatedAtSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updatedAt: number | null = null;
  count$ = this.store.select(countSelector);
  cannotDecrement$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(
    private store: Store
  ) {}

  increment(): void {
    this.updateCounter();
    this.store.dispatch(increase());
  }

  decrement(): void {
    this.updateCounter();
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.updateCounter();
    this.store.dispatch(clear());
  }

  updateCounter(): void {
    this.updatedAt = Date.now();
  }
}

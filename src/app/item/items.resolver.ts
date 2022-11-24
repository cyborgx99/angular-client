import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { finalize, first, Observable, tap } from 'rxjs';
import { StoreState } from '../reducers';
import { AllItemsLoaded, loadAllItems } from './item.actions';

@Injectable()
export class ItemResolver implements Resolve<AllItemsLoaded> {
  constructor(private store: Store<StoreState>) {}

  loading = false;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllItems());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}

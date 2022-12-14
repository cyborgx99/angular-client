import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { StoreState } from '../reducers';
import { isLoggedIn } from './auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<StoreState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}

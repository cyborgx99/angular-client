import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthActions } from 'src/app/auth/action-types';
import { isLoggedIn } from 'src/app/auth/auth.selectors';
import { AuthService } from 'src/app/auth/auth.service';
import { StoreState } from 'src/app/reducers';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = new Observable();
  router: any;

  constructor(
    private authService: AuthService,
    private store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  }

  handleLogout() {
    this.authService
      .logout()
      .pipe(
        tap(() => {
          this.store.dispatch(AuthActions.logout());
          this.router.navigateByUrl('/');
        })
      )
      .subscribe(() => {});
  }
}

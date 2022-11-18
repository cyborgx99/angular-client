import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { StoreState } from 'src/app/reducers';
import { AuthActions } from '../action-types';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<StoreState>
  ) {}

  ngOnInit(): void {}

  changeEmail() {}

  onChangePassword(event: KeyboardEvent) {
    // with type info
    this.password = (event.target as HTMLInputElement).value;
  }

  onChangeEmail(event: KeyboardEvent) {
    // with type info
    this.email = (event.target as HTMLInputElement).value;
  }

  handleLogin() {
    this.authService
      .login(this.email, this.password)
      .pipe(
        tap((data) => {
          this.store.dispatch(AuthActions.login(data));
          this.router.navigateByUrl('/');
        })
      )
      .subscribe(() => {});
  }
}

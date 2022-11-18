import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material-module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
  ],
})
export class AuthModule {}

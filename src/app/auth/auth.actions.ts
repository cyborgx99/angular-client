import { createAction, props } from '@ngrx/store';
import { AuthSuccessResponse, SuccessResponse } from './dto/auth.dto';

export const login = createAction(
  '[Login Page] User Login',
  props<AuthSuccessResponse>()
);

export const logout = createAction('[Login Page] User Logout');

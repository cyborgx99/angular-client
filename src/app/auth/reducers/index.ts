import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  accessToken: string | undefined;
}

const initialAuthState: AuthState = {
  accessToken: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      accessToken: action.accessToken,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return { ...initialAuthState };
  })
);

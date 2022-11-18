import { createSelector } from '@ngrx/store';
import { StoreState } from '../reducers';

export const isLoggedIn = createSelector(
  //@ts-ignore
  (state: StoreState) => state['auth'],
  (auth) => !!auth.accessToken
);

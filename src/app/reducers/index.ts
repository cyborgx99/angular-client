import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface StoreState {}

export const reducers: ActionReducerMap<StoreState> = {};

export const metaReducers: MetaReducer<StoreState>[] = !environment.production
  ? []
  : [];

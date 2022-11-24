import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface StoreState {}

export const reducers: ActionReducerMap<StoreState> = {
  router: routerReducer,
};

export const logger = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('start before:', state);
    console.log('action', action);

    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<StoreState>[] = !environment.production
  ? [logger]
  : [];

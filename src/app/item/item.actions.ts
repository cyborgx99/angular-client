import { createAction, props } from '@ngrx/store';
import { Item } from './dto/item.dto';

export interface AllItemsLoaded {
  items: Item[];
}

export const loadAllItems = createAction('[Items Resolver] Load All Items');

export const allItemsLoaded = createAction(
  '[Load Items Effect] All items loaded',
  props<AllItemsLoaded>()
);

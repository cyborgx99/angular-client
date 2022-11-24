import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ItemActions } from './action-types';
import { allItemsLoaded } from './item.actions';
import { ItemService } from './item.service';

@Injectable()
export class ItemEffects {
  loadItems = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadAllItems),
      concatMap(() => this.itemService.getAllItems()),
      map((items) => allItemsLoaded({ items }))
    )
  );

  constructor(private actions$: Actions, private itemService: ItemService) {}
}

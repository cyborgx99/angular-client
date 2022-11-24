import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ItemResolver } from './items.resolver';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: 'items',
    title: 'Items',
    component: ItemComponent,
    canActivate: [AuthGuard],
    resolve: {
      items: ItemResolver,
    },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature(),
  ],
  providers: [ItemResolver],
})
export class ItemModule {}

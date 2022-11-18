import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'items',
    title: 'Items',
    component: ItemComponent,
  },
];

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ItemModule {}

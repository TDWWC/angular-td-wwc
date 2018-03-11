import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  { path: 'cards', component: CardListComponent},
  { path: 'detail/:id', component: CardDetailComponent},
  { path: '', redirectTo: '/cards', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }

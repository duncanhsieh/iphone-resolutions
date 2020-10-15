import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: '', redirectTo: 'sizes', pathMatch: 'full' },
  { path: 'sizes', component: EmptyComponent },
  { path: 'points', component: EmptyComponent },
  { path: 'rendered', component: EmptyComponent },
  { path: 'physical', component: EmptyComponent },
  { path: 'devices/*', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

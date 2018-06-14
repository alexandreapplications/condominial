import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CondominiumComponent } from './condominium/condominium.component';

const routes: Routes = [{
  path: '', component: IndexComponent },
  { path: ':condominium', component: CondominiumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

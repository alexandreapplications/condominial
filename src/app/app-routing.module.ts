import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'info', loadChildren: './@modules/utility/utility.module#UtilityModule' },
  { path: 'user', loadChildren: './@modules/user/user.module#UserModule' },
  { path: '', loadChildren: './@modules/landing/landing.module#LandingModule' },
  { path: '**', redirectTo: '/info/notfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

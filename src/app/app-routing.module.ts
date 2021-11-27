import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONSTANTS } from 'src/constants';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: CONSTANTS.SETTINGS.FRONTEND.ROUTES.HOME,
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

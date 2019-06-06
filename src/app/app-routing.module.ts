import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './_components/_pages/home-page/home-page.component';
import { DetailsPageComponent } from './_components/_pages/details-page/details-page.component';

const routes: Routes = [
  {
    path: 'details',
    component: DetailsPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

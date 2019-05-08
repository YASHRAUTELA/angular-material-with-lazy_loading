import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'calender',
    loadChildren:'./calender/calender.module#CalenderModule'
  },
  {
    path:'grid',
    loadChildren:'./grid/grid.module#GridModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

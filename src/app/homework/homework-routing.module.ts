import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InitComponent } from './components/init/init.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworkRoutingModule { }

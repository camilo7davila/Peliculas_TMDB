import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostviewComponent } from './components/mostview/mostview.component';


const routes: Routes = [
  {
    path: '',
    component: MostviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostviewRoutingModule { }

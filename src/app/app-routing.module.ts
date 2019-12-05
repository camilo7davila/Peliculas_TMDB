import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./homework/homework.module').then(m => m.HomeworkModule)
      },
      {
        path: 'home:id',
        loadChildren: () => import('./homework/homework.module').then(m => m.HomeworkModule)
      },
      {
        path: 'view',
        loadChildren: () => import ('./mostview/mostview.module').then(m => m.MostviewModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

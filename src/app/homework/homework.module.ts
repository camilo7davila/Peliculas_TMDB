import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { InitComponent } from './components/init/init.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [InitComponent, HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeworkModule { }

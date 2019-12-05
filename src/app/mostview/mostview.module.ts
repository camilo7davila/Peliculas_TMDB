import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostviewRoutingModule } from './mostview-routing.module';
import { MostviewComponent } from './components/mostview/mostview.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [MostviewComponent],
  imports: [
    CommonModule,
    MostviewRoutingModule,
    SharedModule
  ]
})
export class MostviewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmService } from './services/film/film.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FilmService
  ]
})
export class CoreModule { }

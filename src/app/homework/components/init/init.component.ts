import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/core/services/film/film.service';
import { filmDetails } from 'src/app/interface/film.interface';

import {retry, map} from 'rxjs/operators';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  results: filmDetails[] = [];

  ngOnInit() {
    this.getFilmsList();
  }

  getFilmsList() {
    this.filmService.getDiscoverFilms().pipe(
      retry(3),
      map((response: any) => response.results as filmDetails[])
      ).
      subscribe(data => {
        this.results = data;
        console.log(this.results);
      });
  }
}

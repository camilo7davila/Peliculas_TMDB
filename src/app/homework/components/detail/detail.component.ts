import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FilmService } from 'src/app/core/services/film/film.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { filmDetails } from 'src/app/interface/film.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private servie: FilmService) { }

  film$: Observable<filmDetails>;

  ngOnInit() {
   this.film$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.servie.getDetailFilm(params.id);
      })
    );
  }
}

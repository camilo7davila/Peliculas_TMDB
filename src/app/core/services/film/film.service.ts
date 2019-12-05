import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { film, filmDetails } from 'src/app/interface/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getDiscoverFilms(): Observable<film> {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=ef736aff6e66446c750e094e19dff8ef&language=es&sort_
                by=popularity.desc&include_adult=false&include_video=false&page=1`;
    return this.http.get<film>(url);
  }

  getDetailFilm(id: number): Observable<filmDetails> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ef736aff6e66446c750e094e19dff8ef&language=es`;
    return this.http.get<filmDetails>(url);
  }
}

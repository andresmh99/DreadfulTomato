import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  urlBase:string="https://api.themoviedb.org/3/"
  apiKey:string="api_key=d9237b0e5d4969c01d0260ed3ee3e145"
  constructor(private http:HttpClient) { }

  getWeekMoviesData(page:number){
    return this.http.get(`${this.urlBase}trending/movie/week?${this.apiKey}&page=${page}`)
  }

  getWeekSeriesData(page:number){
    return this.http.get(`${this.urlBase}trending/tv/week?${this.apiKey}&page=${page}`)
  }

  searchMovies(search:string){
    return this.http.get(`${this.urlBase}search/movie?${this.apiKey}&query=${search}`)
  }
  searchSeries(search:string){
    return this.http.get(`${this.urlBase}search/tv?${this.apiKey}&query=${search}`)
  }
  redirectToOficialPageMovie(id:number){
    return this.http.get(`${this.urlBase}/movie/${id}?${this.apiKey}`)
  }
  redirectToOficialPageSerie(id:number){
    return this.http.get(`${this.urlBase}/tv/${id}?${this.apiKey}`)
  }
}

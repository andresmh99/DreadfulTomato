import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posterMovies:string="../../../assets/movies.png";
  posterSeries:string="../../../assets/series.png";

  constructor() { }

  ngOnInit(): void {
  }

}

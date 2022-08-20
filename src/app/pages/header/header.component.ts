import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgLogo:string="../assets/logo.png";
  iconMovie:string="../assets/icon-movies.png";
  iconSeries:string="../assets/icon-series.png";
  iconFilters:string="../assets/icon-filter.png";
  iconLogin:string="../assets/icon-login.png";

  constructor() { }

  ngOnInit(): void {
  }

}

import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';






@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  
  ],
  exports:[
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    HeaderComponent

  ]
})
export class PagesModule { }

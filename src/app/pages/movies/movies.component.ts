import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { APIService } from 'src/app/services/api.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  none:string="none";
  dataMovies:any [] =[];
  searchMovie:string="";
  pages:number=1;
  idMovie:number=0;
  description:boolean=false;
  total_pages:number=0;
  oficialPage:string="";
  
  constructor(private service:APIService) { }

  ngOnInit(): void {
    this.service.getWeekMoviesData(this.pages).subscribe((res:any)=>{
      this.dataMovies=res.results;
      this.total_pages=res.total_pages;
      this.pages=res.page;
  
    })
  }
  refresh(){
    this.dataMovies =[];
    this.service.getWeekMoviesData(this.pages).subscribe((res:any)=>{
      this.dataMovies=res.results;
      this.total_pages=res.total_pages;
    })
  }
  search(){
    if(this.searchMovie){
      this.dataMovies =[];
      this.service.searchMovies(this.searchMovie).subscribe((res:any)=>{
      this.dataMovies=res.results;
      })
    }else{
      this.refresh();
    }
    
  }
  getOficialPage($id){
    this.service.redirectToOficialPageMovie($id).subscribe((res:any)=>{
      this.oficialPage=res.homepage;
      window.open(this.oficialPage, '_blank');
    })
  }

  viewDescription($event){
    this.idMovie=$event;
    this.description=!this.description;  
  }
  previousPage(){
    if(this.pages==1){
      this.pages=1;
    }else{
      this.pages--;
      this.refresh();
    }
  }
  nextPage(){
    if(this.pages>=this.total_pages){
      this.pages=this.total_pages;
    }else{
      this.pages++;
      this.refresh();
    }
  }

}

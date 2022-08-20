import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  none:string="none";
  dataSeries:any [] =[];
  searchSerie:string="";
  pages:number=1;
  idSerie:number=0;
  description:boolean=false;
  total_pages:number=0;
  oficialPage:string="";

  constructor(private service:APIService) { }

  ngOnInit(): void {
    this.service.getWeekSeriesData(this.pages).subscribe((res:any)=>{
      this.dataSeries=res.results;
      this.total_pages=res.total_pages;
      this.pages=res.page;
    }); 
  }
  search(){
    if(this.searchSerie){
      this.dataSeries =[];
      this.service.searchSeries(this.searchSerie).subscribe((res:any)=>{
      this.dataSeries=res.results;
    })
    }else{
      this.refresh();
    }
  }
  refresh(){
    this.dataSeries =[];
    this.service.getWeekSeriesData(this.pages).subscribe((res:any)=>{
      this.dataSeries=res.results;
      this.total_pages=res.total_pages;
    })
  }
  getOficialPage($id){
    this.service.redirectToOficialPageSerie($id).subscribe((res:any)=>{
      this.oficialPage=res.homepage;
      window.open(this.oficialPage, '_blank');
    })
  }

  viewDescription($event){
    this.idSerie=$event;
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

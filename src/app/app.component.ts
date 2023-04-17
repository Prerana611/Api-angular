import { Component, OnInit } from '@angular/core';
import {AddapiService} from './addapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'instagram';
  dummyData:any = [];
  
  constructor(private api:AddapiService) {}

  ngOnInit() {
    this.api.getdata().subscribe((data)=>{
      console.log(data);
      this.dummyData = data.data ;
  }); 
}}

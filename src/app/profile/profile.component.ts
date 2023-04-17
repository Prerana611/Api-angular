import { Component, OnInit } from '@angular/core';
import { AddapiService } from '../addapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dummyData:any=[];
  constructor(private api:AddapiService){}
  ngOnInit(): void {
    this.api.getpost().subscribe((data)=>{
      console.log(data);
      this.dummyData = data.data ;});

  }

} 

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddapiService } from 'src/app/addapi.service';


@Component({
  selector: 'app-profiledata',
  templateUrl: './profiledata.component.html',
  styleUrls: ['./profiledata.component.scss']
})
export class ProfiledataComponent implements OnInit{
  
  ngOnInit() {
    this.api.getdata().subscribe(data=>{
      console.log(data);
      this.dummydata= data.data;
    })
  }
  dummydata:any=[];
 
constructor( private api:AddapiService, private router: Router){

}
delete(id:any){
this.api.deleteuser(id).subscribe( (data) => {
alert(`User with ID ${id} deleted`);
},
  (error: any) => console.error(error)

);
} 
}

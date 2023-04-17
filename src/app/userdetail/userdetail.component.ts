import { Component, OnInit } from '@angular/core';
import { UserdetailService } from '../services/userdetail.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit{
  dummydata:any=[];
  ngOnInit(){
    this.api.getdata().subscribe((data)=>{
      console.log(data);
      this.user = data ;
  }); }
 
  user:any;
constructor(private api:UserdetailService ,private post:PostService){
}
    get(){
      this.post.getpost().subscribe((data:any)=>{
        console.log(data);
        this.dummydata = data.data ;});
    }
}
  
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class PostdataComponent implements OnInit{
  
  dummyData:any=[];
  constructor(private api:PostService){

  } 
  ngOnInit() {
    this.api.getpost().subscribe((data)=>{
      console.log(data);
      this.dummyData = data.data ;});
  }
  delete(id:any){
    this.api.deletepost(id).subscribe( (data) => 
    alert(`User with ID ${id} deleted`),
    error => console.error(error)
    );
    }
}
 
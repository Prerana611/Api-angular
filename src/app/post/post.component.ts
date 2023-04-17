import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddapiService } from '../addapi.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  postform!:FormGroup;
  newpost={
    firstName:'',
    lastName:'',
    email:'',
    text:'',
    image:'',
    likes:'',
    tags:'',
    owner:'60d0fe4f5311236168a109ca'
  }
  dummydata:any=[];
 constructor(private formBuilder: FormBuilder, private api:PostService){
this.postform= this.formBuilder.group({
  firstName:[null, Validators.required],
  lastName:[null, Validators.required],
  email:[null, Validators.required, Validators.email],
  text:[null, Validators.required],
  image:[null, Validators.required],
  likes:[null, Validators.required],
  tags:[null, Validators.required],
  owner:[null, Validators.required],

})
 }
  ngOnInit(): void {
    this.api.addpost(this.postform.value).subscribe((data)=>{
      console.log(data);
      this.dummydata = data.data ;
  }); 
  }
  onSubmit() {
    console.log(this.postform.value);
  }
get text(){
  return this.postform.get('text');
}
get image(){
  return this.postform.get('image')
}
  get likes() {
    return this.postform.get('likes');
  }

  get tags() {
    return this.postform.get('password');
  }
get owner(){
  return this.postform.get('owner')
}
data(){
  this.api.addpost(this.postform.value).subscribe(data=>{
    console.log(data);
    this.dummydata= data.data;
  })
}
create(){
  this.api.addpost(this.postform.value).subscribe(response => {
    console.log(response);
  });
}
}

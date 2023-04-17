import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { AddapiService } from '../addapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
   newUser ={
    firstName: '',
    lastName:'',
    userid:'',
    password: '',
    email: '',

  }
  dummyData!:[];
  constructor(private formBuilder: FormBuilder, private api:AddapiService) {
    this.signupForm = this.formBuilder.group({
      firstName:[null, Validators.required],
      lastName:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      userid:[null, Validators.required]
    });
  }
  ngOnInit() {
   
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
get firstName(){
  return this.signupForm.get('firstName');
}
get lastName(){
  return this.signupForm.get('lastName')
}
  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
get userid(){
  return this.signupForm.get('userid')
}
 
  user(){
    this.api.adddata(this.signupForm.value).subscribe(response => {
      console.log(response);
    });
  }
  }


 
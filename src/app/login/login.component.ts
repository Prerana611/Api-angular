import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddapiService } from '../addapi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
 firstName:any;
 email:any;
 userdata:any;
 dummyData:any = [];
 constructor(private router: Router ,private api:AddapiService,private formBuilder: FormBuilder,private http:HttpClient){
  this.loginForm = this.formBuilder.group({
    firstName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]]
  });
 }
 onlogin(){
 }
 login(){
  this.api.fetchdata(this.loginForm.value.firstName)
    .then((response: any) => {
      console.log(response);
      this.router.navigate(["/profile"]);
    })
    .catch((error: any) => {
      console.error(error);
    });
}
 

}
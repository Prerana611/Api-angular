import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ProfiledataComponent } from './admin/profiledata/profiledata.component';
import { PostdataComponent } from './admin/postdata/postdata.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path:'signup', component:SignupComponent},
  { path:'post',component:PostComponent},
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'usesrdeail',component:UserdetailComponent},
  { path:'profiledata',component:ProfiledataComponent},
  { path:'postdata',component:PostdataComponent},
  { path:'adminpage',component:AdminpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

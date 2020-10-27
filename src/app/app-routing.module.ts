import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CatlogComponent } from './components/catlog/catlog.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent ,pathMatch:'full'},
  {path:"catlog",component:CatlogComponent},
  {path:"courses",component:CoursesComponent},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"sign",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

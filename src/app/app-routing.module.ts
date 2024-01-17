import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFound404Component } from './not-found404/not-found404.component';
import { LoginComponent } from './login/login.component';
import { SubComponent } from './home/sub/sub.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { Service1Component } from './home/service1/service1.component';
import { Service2Component } from './home/service2/service2.component';
import { Service3Component } from './home/service3/service3.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanActivate, CanActivateChild, CanDeactive, resolve } from './Auth.Guard';
import { FormComponent } from './form/form.component';


const route:Routes =[
  {path:'',component:HomeComponent},
 
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[CanDeactive]},
  {path:'Course',component:CourseComponent, resolve:{Course:resolve} },
  {path:'Login',component:LoginComponent},
  //{path:'Course/:id',component:CoursedetailsComponent},
  {path:'Course',children:[
    {path:'checkout', component:CheckoutComponent,canActivate:[CanActivate]},
    {path:'form',component:FormComponent},
    {path:':id',component:CoursedetailsComponent},
  ]},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  // {path:'checkout',component:CheckoutComponent,canActivate:[CanActivate]},
  { path:'**',component:NotFound404Component}
]

@NgModule({
  // imports: [RouterModule.forRoot(route,{useHash:true},{scrollPosition:'enabled'})],
   imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

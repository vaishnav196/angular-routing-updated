import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import{AdminRouteModule } from'./admin-routing.module'

console.log("Admin Module is Loaded Now On CLicking");

@NgModule({
  declarations: [
    AdminListComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,AdminRouteModule
   
  
  ]
})
export class AdminModule { }

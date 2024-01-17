import { Component, inject } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Route, Router } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";
import { ContactComponent } from "./contact/contact.component";
import { CourseService } from "./services/course.service";
import { Course } from "./Model/Course";

export const CanActivate = () => {
  const authservice: AuthService = inject(AuthService);
  const route: Router = inject(Router);
   const courseService:CourseService=inject(CourseService);

  if (authservice.islogged) {
    return true
  }
  else {
    return false
  }
}



export const CanActivateChild = () => {
  const authservice: AuthService = inject(AuthService);
  const route: Router = inject(Router);


  if (authservice.islogged) {
    return true
  }
  else {
    return false
  }
}


export const CanDeactive = (component) => {
  const authservice: AuthService = inject(AuthService);
  const route: Router = inject(Router);

  return component.canexit()
}


export const resolve = () =>{
  const courseService:CourseService=inject(CourseService);
//let CourseList:Course[]=[]

//  courseService.getAllcourse().subscribe((course)=>{
//   let CourseList:any=course;
// })
// return CourseList


 return courseService.getAllcourse()
}




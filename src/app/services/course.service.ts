import { Injectable, inject } from '@angular/core';
import { Course } from '../Model/Course';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
// courseService:CourseService=inject(CourseService);
  constructor() { }
  course:Course[]=[
    {id:1,title:'Angular',price:299},
    {id:2,title:'React JS',price:299},
    {id:3,title:'NodeJs',price:299},
    {id:4,title:'MongoDb',price:299},
    {id:5,title:'Python',price:299},
  ]
  

  getAllcourse(){
   return new Observable((sub)=>{
    setTimeout(() => {
      
      sub.next(this.course)
    }, 3000);
  
  })
  }
}

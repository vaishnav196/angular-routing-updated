import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Model/Course';
import { Observable } from 'rxjs';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  AllCourses:any;
  activeRouteLink:ActivatedRoute=inject(ActivatedRoute);
  Course:Course[];
  courseService:CourseService=inject(CourseService);
ngOnInit(): void {
 // this.AllCourses= this.activeRouteLink.snapshot.data['course']
 this.activeRouteLink.queryParamMap.subscribe((data)=>{
      this.AllCourses= this.activeRouteLink.snapshot.data['course']
  this.AllCourses=this.courseService.course;
   })
// this.courseService.getAllcourse().subscribe((data)=>{
// console.log(data)
// this.AllCourses=data;
//   })
}
 
}



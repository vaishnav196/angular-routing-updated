import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router,Event, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'route';
  showloader=false;
ngOnInit(): void {
  this.router.events.subscribe((RouterEvent:Event)=>{
    if(RouterEvent instanceof NavigationStart){
      this.showloader=true
    } 
    if(RouterEvent instanceof NavigationEnd||RouterEvent instanceof NavigationCancel){
      this.showloader=false;
    }
   
    

  })
}
  router:Router=inject(Router);

}

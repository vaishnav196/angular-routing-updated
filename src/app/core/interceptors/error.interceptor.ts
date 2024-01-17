import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        catchError((error)=>{
          if(error instanceof HttpErrorResponse){
              if(error.error instanceof ErrorEvent){
                console.log('error event')
              }
              else{
                switch(error.status){
                  case 401: //unauthorized error
                  console.log(error.statusText)
                  break;
                  case 403: //unauthorized error
                  console.log(error.statusText)
                  break;
                  case 404: //unauthorized error
                  console.log(error.statusText)
                  break;
                  case 503: //unauthorized error
                  console.log(error.statusText)
                  break;
                }
              }
          }
          else{
            console.log('error occured here')
          }
          return throwError(()=>new error.statusText)
        })
    );
  }
}

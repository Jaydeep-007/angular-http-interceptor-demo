import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    const GUID = 'f4179b26-21ac-432c-bcd8-cb4bc6e50981'
    const modifiedRequest = request.clone({
      setHeaders:{
        GUID
      }
    })
    return next.handle(modifiedRequest);
  }
}

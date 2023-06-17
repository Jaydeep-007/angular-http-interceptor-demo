import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Log the request
    console.log(`Outgoing request: ${req.url}`);

    return next.handle(req).pipe(
      // Log the response
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(`Incoming response: ${event.url}`);
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.cookie.check("token") && localStorage.getItem("userID") != null){
      return next.handle(request.clone({headers: new HttpHeaders().append("x-auth-token", this.cookie.get("token"))}))
    } else {
      return next.handle(request);
    }
  }
}

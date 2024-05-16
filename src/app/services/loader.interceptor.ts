import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoaderService } from './loader.service';
import { error } from 'console';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event:any)=>{
        this.loaderService.loader.next(true)
        if(event.type=HttpEventType.Response){
          if(event.status==200 || event.status==201){
            this.loaderService.loader.next(false)
          }
        }
      })

    );
  }
}

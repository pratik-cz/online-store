import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader:BehaviorSubject<boolean>=new BehaviorSubject(false);
  constructor() { }
}

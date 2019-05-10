import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>();
  processCounter: number = 0;
  
  show() {
    if(this.processCounter++ == 0)
      this.isLoading.next(true);
  }
  
  hide() {
    if(--this.processCounter == 0)
      this.isLoading.next(false);
  }
}

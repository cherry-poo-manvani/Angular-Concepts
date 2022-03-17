import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class SubjectService {
  private sub = new BehaviorSubject<string>('sia');
  cast = this.sub.asObservable();
  constructor() { }

  editUser(newsub: string){
    this.sub.next(newsub);
  }
}

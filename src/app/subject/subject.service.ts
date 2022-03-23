import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()

export class SubjectService {
 
  subject:Subject<string>;

  constructor() {
    this.subject = new Subject<string>();
  }

  
}


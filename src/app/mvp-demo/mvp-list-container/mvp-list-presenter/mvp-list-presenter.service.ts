import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Userdata } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class MvpListPresenterService {

  userdataobserve$:Observable<Userdata>;
  userdatasubject:Subject<Userdata>;

  constructor() {
    this.userdataobserve$ = new Observable<Userdata>();
    this.userdatasubject = new Subject<Userdata>();
    this.userdataobserve$ = this.userdatasubject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Details } from './subject.model';


@Injectable()

export class SubjectService {
  private _details: Subject<Details>;
  public details$: Observable<Details>;
  private _editDetails: Subject<Details>;
  public editDetails$: Observable<Details>;
  private _editedDetails: Subject<Details>;
  public editedDetails$: Observable<Details>;

  constructor() {
    this._details = new Subject();
    this.details$ = this._details.asObservable();
    this._editDetails = new Subject();
    this.editDetails$ = this._editDetails.asObservable();
    this._editedDetails = new Subject();
    this.editedDetails$ = this._editedDetails.asObservable();
  }

  // getDetails(): Details[] {
  //   return this._details;
  // }

  addDetails(newData: Details): void {
    this._details.next(newData);
  }

  editDetails(newData: Details): void {
    this._editedDetails.next(newData);
  }

  sendDetailsToEdit(oldData: Details): void {
    this._editDetails.next(oldData);
  }
}

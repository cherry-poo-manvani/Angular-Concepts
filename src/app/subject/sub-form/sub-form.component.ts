import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit {
  sub!: string;
  editUser!: string; 
  constructor(private subjectservice: SubjectService) { }

  ngOnInit(): void {
    this.subjectservice.cast.subscribe(sub => this.sub = sub);
  }

  editTheUser(){
    this.subjectservice.editUser(this.editUser)
  }
}

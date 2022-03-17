import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent implements OnInit {
  sub: string | undefined;
  constructor(private subjectservice: SubjectService) { }

  ngOnInit(): void {
    this.subjectservice.cast.subscribe(sub => this.sub = sub);
  }

}

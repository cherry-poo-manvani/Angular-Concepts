import { Component, OnInit } from '@angular/core';
import { Details } from '../subject.model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent implements OnInit {
  
  

  constructor(private service:SubjectService) { }

  ngOnInit(): void {
    this.service.subject.subscribe((m) => {
      console.log(m);
    })    
  }


 
}

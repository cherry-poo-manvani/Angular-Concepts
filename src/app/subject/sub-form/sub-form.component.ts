import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit {
  
  sample:string = 'Dur ja Data';
  constructor(private service:SubjectService) { 
  }

  ngOnInit(): void {}

  public onnext(){
    this.service.subject.next(this.sample);
  }

}
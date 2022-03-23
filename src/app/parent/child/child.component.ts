import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  childData:string ='Child Data to parent';
  
  @Input() child_data:string;
  @Output() childstringdata: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  SendData(){
    this.childstringdata.emit(this.childData);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

  parentvalue:string = 'poo ';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Userdata } from '../../user.model';

@Component({
  selector: 'app-mvp-list-presentation',
  templateUrl: './mvp-list-presentation.component.html',
  styleUrls: ['./mvp-list-presentation.component.scss']
})
export class MvpListPresentationComponent implements OnInit {

  listdata:Userdata[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

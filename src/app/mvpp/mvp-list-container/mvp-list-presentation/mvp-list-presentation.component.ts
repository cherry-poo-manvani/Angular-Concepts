import { Component, Input, OnInit } from '@angular/core';
import { mvppData } from '../../mvpp.model';
import { MvppModule } from '../../mvpp.module';

@Component({
  selector: 'app-mvp-list-presentation',
  templateUrl: './mvp-list-presentation.component.html',
  styleUrls: ['./mvp-list-presentation.component.scss']
})
export class MvpListPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

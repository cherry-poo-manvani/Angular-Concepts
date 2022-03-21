import { Component, OnInit } from '@angular/core';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-mvp-list-container',
  templateUrl: './mvp-list-container.component.html',
  styleUrls: ['./mvp-list-container.component.scss'],
})
export class MvpListContainerComponent implements OnInit {

  constructor(private service:MvpService) { }

  ngOnInit(): void {
  }

}

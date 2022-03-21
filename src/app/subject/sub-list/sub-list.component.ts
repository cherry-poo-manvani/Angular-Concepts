import { Component, OnInit } from '@angular/core';
import { Details } from '../subject.model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent implements OnInit {
  
  DetailsList= [] as Details[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.details$.subscribe((newData) => {
      this.addDetails(newData);
    });
    this.subjectService.editedDetails$.subscribe((newData) => {
      this.editDetails(newData);
    });
  }

  DetailsTrack(index: number, profile: Details ): number {
    return profile.id;
  }

  addDetails(newData: Details): void {
    this.DetailsList.push(newData);
  }

  editDetails(newData: Details): void {
    let temp = this.DetailsList.findIndex((ele) => ele.id === newData.id);
    this.DetailsList[temp] = newData;
  }

  onEdit(oldData: Details) {
    this.subjectService.sendDetailsToEdit(oldData);
  }

  sendDetailsToEdit(id: number, oldData: Details) {
    this.subjectService.sendDetailsToEdit(oldData);
  }

  onDelete(id : number) : Details[]{
    return this.DetailsList.splice(id, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit {
  
  DetailsForm={} as FormGroup;
  isEditMode: boolean = false;
  idToEdit!: number;

  constructor(private formBuilder: FormBuilder, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.buildProfileForm();

    this.subjectService.editDetails$.subscribe((oldData) => {
      this.isEditMode = true;
      this.DetailsForm.patchValue(oldData);
      this.idToEdit = oldData.id;
    });
  }

  buildProfileForm() {
    this.DetailsForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email]],
    });
  }

  onSubmit() {
    if (this.DetailsForm.valid) {
      if (this.isEditMode) {
        this.subjectService.editDetails({...this.DetailsForm.value, id: this.idToEdit})
      } else {
        this.subjectService.addDetails(this.DetailsForm.value)
      }
      this.DetailsForm.reset();
    }
  }

}
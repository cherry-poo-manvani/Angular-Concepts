import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from '../Model/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  
})

export class UserFormComponent implements 
OnInit {
  userForm = {} as FormGroup;
  submitted: boolean = false;
  userData: User[] = []

  @Input() id?: number;
  isEdit: boolean = false;
  departments: any;

  @Output() cancel:EventEmitter<Event>;

  constructor(private formBuilder: FormBuilder,
    private userServiceService: UserServiceService,
    private router: Router, private route: ActivatedRoute) {
    this.cancel = new EventEmitter<Event>()

  }
  

  ngOnInit(): void {
    this.buildform();
    this.getDepartment();

    if (this.id) {
      this.isEdit = true;
    }
    if (this.isEdit) {
      if(this.id) {
        this.userServiceService.getByID(this.id).subscribe(data => {
          this.userForm.patchValue(data)
        })
      }
    }
  }

  buildform(){
    this.userForm = this.formBuilder.group({
      "firstname": new FormControl("", Validators.required),
      "lastname": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.email),
      "mobile": new FormControl("", Validators.required),
      "gender": new FormControl("", Validators.required),
      "date": new FormControl("", Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)),
      // "department": new FormControl("", Validators.required),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }


  onSubmit() {
    if (this.isEdit) {
      this.Updatedata()
    }
    else {
      this.Savedata()
    }
    this.cancel.emit();
  }


  Updatedata() {
    if (this.id) {
      this.userServiceService.updateUser(this.id, this.userForm.value).subscribe(() => {
        alert("updated");
      })
    }
  }

  Savedata() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.userServiceService.addUser(this.userForm.value).subscribe(() => {
    })
  }

  onReset() {
    this.cancel.emit();
  }
  getDepartment() {
    this.userServiceService.getDepratmnet().subscribe((res: any) => {
      this.departments = res;
    })
  }
}

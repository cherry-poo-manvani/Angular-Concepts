import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm={} as FormGroup;
  submitted: boolean = false;
  userData:any
  constructor(private formBuilder: FormBuilder,
     private userServiceService:UserServiceService,
     private router: Router) { }

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({ 
        "firstname": new FormControl(""),
        "lastname": new FormControl(""),
        "email": new FormControl("", ),
        "mobile": new FormControl(""),
        "gender": new FormControl(""),
        "date": new FormControl(""),
        "department": new FormControl(""),
      });
  }

   // convenience getter for easy access to form fields
   get f() { return this.userForm.controls; }

  onSubmit() {
    debugger
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    this.userServiceService.addUser(this.userForm.value).subscribe((res)=>{
      this.userData = res
      debugger
      this.router.navigateByUrl("/list");
    })
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

}

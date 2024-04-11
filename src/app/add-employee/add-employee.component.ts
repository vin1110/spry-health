import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  isSubmitted: boolean = false;

  emailRegex = "^[a-zA-Z0-9.!#$%&?_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  phoneNumberRegex = /^\+\d{2}\s\d{10}$/;
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      fname: [null, [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lname: [null, [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      phoneNo: [null, [Validators.required, Validators.pattern(this.phoneNumberRegex)]],
      address: [null, [Validators.required]],
      position: [null, [Validators.required]],
      doj: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  get ef() { return this.employeeForm.controls; }

  submit() {
    console.log("formValue", this.employeeForm.value);
  }

  reset() {
    this.employeeForm.reset();
  }

  getCurrentDate(): Date {
    return new Date();
  }
}

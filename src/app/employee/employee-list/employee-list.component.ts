import { Component, OnInit } from '@angular/core';
import { EmployeeSelector } from '../store/emp.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['sr', 'fname', 'lname', 'email', 'phone', 'address', 'position', 'doj'];
  employees$: Observable<any>;

  constructor(private empSelector: EmployeeSelector) {
    this.employees$ = this.empSelector.getEmployeeList();
  }

  ngOnInit(): void { }
}

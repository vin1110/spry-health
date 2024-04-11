import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['sr', 'fname', 'lname', 'email','phone','address','position','doj'];
  dataSource = new MatTableDataSource<any>([]);
   ELEMENT_DATA  = [
    {srno: 1, fname: 'Hydrogen', phoneNo: 1.0079, email: 'H'},
    {srno: 2, fname: 'Helium', phoneNo: 4.0026, email: 'He'},
    {srno: 3, fname: 'Lithium', phoneNo: 6.941, email: 'Li'},
    {srno: 4, fname: 'Beryllium', phoneNo: 9.0122, email: 'Be'},
    {srno: 5, fname: 'Boron', phoneNo: 10.811, email: 'B'},
  ];

  ngOnInit(): void {
    this.dataSource.data = this.ELEMENT_DATA;
  }
}

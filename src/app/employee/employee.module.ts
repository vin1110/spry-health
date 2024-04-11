import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/emp.effects';
import { AppEmpState } from './store/emp.state';
import { EmpReducer } from './store/emp.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

export function reducer(state:any,action:Action):any{
  return new EmpReducer().gererateReducer()(state,action)
}

export function initialState():any {
  return new AppEmpState();
}

@NgModule({
  declarations: [ AddEmployeeComponent,
    EmployeeListComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    StoreModule.forFeature('employee',reducer,{initialState}),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  exports:[AddEmployeeComponent,
    EmployeeListComponent,
    HeaderComponent]
})
export class EmployeeModule { }

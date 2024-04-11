import { Action } from "@ngrx/store";

export class EmployeeInitAction implements Action {
    public type = '[Emp] Init Employee';
    public constructor(public payload:any){}
}

export class EmployeeInitSuccessAction implements Action {
    public type = '[Emp] Init Employee Success';
    public constructor(public payload:any){}
}

export class AddEmployeeAction implements Action {
    public type = '[Emp] Add Employee';
    public constructor(public payload:any){}
}

export class SetClientAction implements Action {
    public type = '[Emp] Set Client';
    public constructor(public payload:any){}
}
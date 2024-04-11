import { Injectable } from "@angular/core";
import { Reducer, ReducerAction } from "../../reducer";
import { AppEmpState } from './emp.state';
import { AddEmployeeAction, EmployeeInitAction, SetClientAction } from "./emp.actions";

export type EmpState = {
    empList: null | [];
    isError: any;
    currentClient: any;
}

export const initialEmpState: EmpState = {
    empList: [],
    isError: null,
    currentClient: null
}

@Injectable()
export class EmpReducer extends Reducer {
    @ReducerAction(EmployeeInitAction)
    public initEmp(state: AppEmpState, action: EmployeeInitAction): AppEmpState {
        return state.merge(
            {
                empList: []
            }
        )
    }

    @ReducerAction(AddEmployeeAction)
    public addEmp(state: AppEmpState, action: AddEmployeeAction): AppEmpState {
        let empList = JSON.parse(JSON.stringify(state.empList));
        empList = [...empList, action.payload.data]
        var newArray = empList.map((obj:any, index:any) => {
            return { ...obj, srno: index + 1 };
          });
        return state.setEmployeeList(newArray)
    }

    @ReducerAction(SetClientAction)
    public setClient(state: AppEmpState, action: SetClientAction): AppEmpState {
       
        return state.setCurrentClient(action.payload)
    }
}
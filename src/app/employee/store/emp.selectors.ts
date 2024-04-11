import { Store,select } from "@ngrx/store";
import { Observable } from "rxjs";
import { EmpState } from "./emp.reducer";
import { filter,map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class EmployeeSelector{
    public constructor(private readonly _store:Store<any>){}

    private get _state():Observable<EmpState>{
        return this._store.pipe(
            select((store)=>store['employee']),
            filter((store)=> store !== undefined)
        )
    }

    public getEmployeeList():Observable<any>{
        return this._state.pipe(map((state)=>state.empList));
    }

    public getCurrentClient():Observable<any>{
        return this._state.pipe(map((state)=>state.currentClient));
    }
}
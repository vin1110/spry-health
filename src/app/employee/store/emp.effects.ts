import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Observable, pipe } from "rxjs";
import { map, switchMap, mergeMap, withLatestFrom, isEmpty } from "rxjs/operators";
import { ofAction } from "../../of-action";
import { Store } from "@ngrx/store";
import { EmployeeInitAction, EmployeeInitSuccessAction } from "./emp.actions";
import { EmployeeSelector } from "./emp.selectors";
@Injectable({ providedIn: "root" })
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private empSelector: EmployeeSelector
    ) { }

    public initEmp$ = createEffect(() =>
        this.actions$.pipe(
            ofAction(EmployeeInitAction),
            withLatestFrom(this.empSelector.getEmployeeList()),
            isEmpty(),
            map(() => {
                return new EmployeeInitSuccessAction({});
            })
        ))
}
import {Type} from '@angular/core';
import {Action} from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export function ofAction<A1 extends Action>(
    ...actions:[Type<A1>]
):(obs:Observable<Action>)=>Observable<A1>;

export function ofAction<A1 extends Action,A2 extends Action>(
    ...actions:[Type<A1>,Type<A2>]
):(obs:Observable<Action>)=>Observable<A1 | A2>;

export function ofAction<A1 extends Action,A2 extends Action,A3 extends Action>(
    ...actions:[Type<A1>,Type<A2>,Type<A3>]
):(obs:Observable<Action>)=>Observable<A1 | A2 | A3>;

export function ofAction<T extends Action>(
    ...actions:[Type<T>]
):(obs:Observable<Action>)=>Observable<T>;

export function ofAction<T extends Action>(
    ...actions:[Type<T>]
):(obs:Observable<Action>)=>Observable<T>{
    return (obs:Observable<Action>)=>{
        return obs.pipe(
            filter((action):action is T =>{
                return (actions.find((actionClass)=> action instanceof actionClass) !== undefined);
            })
        )
    }
}
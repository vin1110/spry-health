import { state } from '@angular/animations';
import { Type } from '@angular/core';
import { Action } from '@ngrx/store';

export function ReducerAction(...actions: Array<Type<Action>>): (reducer: Reducer, method: string) => void {
    return function (reducer: Reducer, method: string): void {
        reducer.storeReducerForActions(method, actions);
    }
}

export abstract class Reducer {
    private reducers: Map<string, Set<string>> | undefined;

    public gererateReducer(): (state: any, action: Action) => any {
        return (state: any, action: Action) => {
            if (this.reducers === undefined) {
                return state;
            }

            const actions = this.reducers.get(action.type);
            if (actions === undefined) {
                return state;
            }

            for (const reducerName of Array.from(actions)) {
                const reducer = (this as any)[reducerName] as (
                    stae: any,
                    action: Action
                ) => any | undefined;

                if (reducer === undefined) {
                    continue;
                }

                state = reducer(state, action);
            }

            return state;
        };
    }

    public storeReducerForActions(reducer:string,actions:Array<Type<Action>>):void{
        actions.forEach((action)=>{
            this.storeReducerForAction(reducer,action);
        })
    }

    private storeReducerForAction(reducer:string,action:Type<Action>):void{
        let list:Set<string>;
        const type = new action({}).type;this.reducers

        if(this.reducers === undefined){
            this.reducers = new Map();
        }

        if(this.reducers.has(type)){
            list = this.reducers.get(type) as Set<string>;
        }else{
            list = new Set();
            this.reducers.set(type,list)
        }

        list.add(reducer)
    }
}
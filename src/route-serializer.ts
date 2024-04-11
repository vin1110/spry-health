import { Params,RouterStateSnapshot } from "@angular/router";
import {RouterStateSerializer} from '@ngrx/router-store';

export interface IRouteStaeUrl{
    url:string;
    params:Params;
    queryParams:Params;
    data:{
        [index:string]:any;
    }
}

export class RouteSerializer implements RouterStateSerializer<IRouteStaeUrl>{
    public serialize(routerState: RouterStateSnapshot): IRouteStaeUrl {
        let route = routerState.root;
        while(route.firstChild){
            route = route.firstChild;
        }

        const {url,root:{queryParams}} = routerState;

        const {params,data}=route;
        return {url,params,data,queryParams}
    }
}
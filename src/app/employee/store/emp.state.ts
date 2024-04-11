import { Record} from 'immutable';
import { EmpState } from './emp.reducer';

export class AppEmpState extends Record<EmpState>({
    empList:[],
    isError:null,
    currentClient:null
}){
    public setEmployeeList(empList:any):this{
        return this.set("empList",empList);
    }

    public setCurrentClient(currentClient:any):this{
        return this.set("currentClient",currentClient);
    }
}
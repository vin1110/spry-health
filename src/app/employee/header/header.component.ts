import { Component } from '@angular/core';
import { EmpState } from '../store/emp.reducer';
import { Store } from '@ngrx/store';
import { SetClientAction } from '../store/emp.actions';
import { Observable } from 'rxjs';
import { EmployeeSelector } from '../store/emp.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  selectedClient$: Observable<any>;
  constructor(private store: Store<EmpState>,private empSelector: EmployeeSelector){
    this.selectedClient$ = this.empSelector.getCurrentClient()
  }
  selectClient(event:any){
    // this.selectedClient = event.value;
    this.store.dispatch(new SetClientAction(event.value))
  }
}

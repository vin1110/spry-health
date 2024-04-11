import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmpState } from './employee/store/emp.reducer';
import { EmployeeSelector } from './employee/store/emp.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spry-health';

  selectedClient$: Observable<any>;
  constructor(private store: Store<EmpState>,private empSelector: EmployeeSelector){
    this.selectedClient$ = this.empSelector.getCurrentClient()
  }
}

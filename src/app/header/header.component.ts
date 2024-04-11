import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedClient = ''
  selectClient(event:any){
    console.log(event);
    this.selectedClient = event.value;
  }
}

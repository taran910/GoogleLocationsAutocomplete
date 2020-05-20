import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rou';
  formattedaddress=" ";
  options={
    componentRestrictions:{
      country:["AU"]
    }
  }
  public handleAddressChange(address: any) {
   this.formattedaddress=address.formatted_address
}
}

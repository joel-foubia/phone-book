import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phone-book';
  user = {
    firstName: 'Coder',
    lastName: 'Byte',
    phoneNumber: '8885559999'
  }

  users = [];
  
  onSubmit() {
    this.users.push(this.user)
    this.users.sort(({ lastName: lastName1 }, { lastName: lastName2 }) => {
      if (lastName1 < lastName2) return -1
      if (lastName1 > lastName2) return 1
      return 0
    })
    this.user = {
      firstName: 'Coder',
      lastName: 'Byte',
      phoneNumber: '8885559999'
    }
  }
}

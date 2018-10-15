import { Component } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Physicians Portal';
  private logo = require('./images/placeholder.png');
  userName: string = null;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (user) {
        this.userName = user.firstName + ' ' + user.lastName;
      } else {
        this.userName = null;
      }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}

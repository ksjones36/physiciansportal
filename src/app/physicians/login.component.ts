import { Router } from '@angular/router';
import { PhysiciansService } from './physicians.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private physiciansService: PhysiciansService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.physiciansService.checkLogin(this.username, this.password).subscribe((user) => {
      if (user !== null) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      } else {
        console.log('Incorrect username or password');
      }
    });
  }

}

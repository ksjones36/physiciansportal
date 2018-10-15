import { PhysiciansService } from './physicians.service';
import { Physician } from './physician';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-physician',
  templateUrl: './create-physician.component.html',
  styleUrls: ['./create-physician.component.css']
})
export class CreatePhysicianComponent implements OnInit {

  physician: Physician = new Physician();

  constructor(
    private physiciansService: PhysiciansService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  checkEmail() {
    // create
  }

  checkUsername() {
    // create
  }

  submit() {
    if (this.physician.firstName && this.physician.lastName && this.physician.email &&
              this.physician.password && this.physician.phone && this.physician.userName) {

      this.physiciansService.checkUserOrEmail(this.physician.email, this.physician.userName).subscribe(user => {
        if (user === null) {
          this.physiciansService.addPhysician(this.physician).subscribe(() => this.router.navigate(['login']) );
        } else {
          console.log(user);
        }
      });
     }

  }

}

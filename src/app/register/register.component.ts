import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  token: any;
  sessionT: any;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    // this.signUpUser({user: {
    //   email: 'test2',
    //   password: 'test2',
    //   admin: false
    // }});

    // this.signInUser({user: {
    //   email: 'test2',
    //   password: 'test2',
    //   admin: false
    // }});
  }
  signUpUser(testUser: any): void {
    this.userService.addUser(testUser).subscribe(data => {
      console.log(data);
    });
  }


}

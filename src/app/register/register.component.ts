import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signUpUser({user: {
      email: 'test2',
      password: 'test2',
      admin: false
    }});

    this.signInUser({user: {
      email: 'test2',
      password: 'test2',
      admin: false
    }});
  }
  signUpUser(testUser: User): void {
    this.userService.addUser(testUser).subscribe(data => {
      console.log(data);
    });
  }

  signInUser(testUser: User): void {
    this.userService.signInUser(testUser).subscribe(data => {
      console.log(data);
    });
  }
}

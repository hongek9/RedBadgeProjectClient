import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signInUser(testUser: User): void {
    this.userService.signInUser(testUser).subscribe(data => {
      console.log(data);
      // localStorage.setItem('token', data.sessionToken);
    });
  }
}

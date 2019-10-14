import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  returnUrl: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // console.log(this.returnUrl);
  }

  signInUser(testUser: User): void {
    // event.preventDefault();
    this.userService.signInUser(testUser)
    .pipe(first())
    .subscribe(data => {
      console.log(data);
      // console.log(this.returnUrl);
      // this.router.navigate(['home']).then(d => console.log(d));
    },
    error => {
      console.log(error);
    });
  }
}

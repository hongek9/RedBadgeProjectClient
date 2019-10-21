import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.currentUserValue;
    console.log(currentUser);
    if (currentUser) {
      // this.router.navigate(['/home']);
      console.log('hi');
      return true;

    }
    console.log('bye');
    this.router.navigate(['']);

    return false;
  }
}



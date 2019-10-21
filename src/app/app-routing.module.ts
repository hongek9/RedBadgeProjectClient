import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { SelectedRoastPageComponent } from './selected-roast-page/selected-roast-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthguardService } from './authguard.service';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: SplashComponent, canActivate: [AuthguardService] },

  { path: 'selectionPage', component: SelectionPageComponent, canActivate: [AuthguardService] },
  { path: 'roastPage', component: SelectedRoastPageComponent, canActivate: [AuthguardService] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

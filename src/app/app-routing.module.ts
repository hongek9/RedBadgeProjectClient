import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { SelectedRoastPageComponent } from './selected-roast-page/selected-roast-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SelectedCoffeePageComponent } from './selected-coffee-page/selected-coffee-page.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: SplashComponent },
  { path: 'selectionPage', component: SelectionPageComponent },
  { path: 'roastPage', component: SelectedRoastPageComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'coffeePage', component: SelectedCoffeePageComponent},
  { path: 'reviews', component: ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

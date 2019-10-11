import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { SplashComponent } from './splash/splash.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectedRoastPageComponent } from './selected-roast-page/selected-roast-page.component';
import { CheckoutComponent, PaymentDialog } from './checkout/checkout.component';
import { ReviewComponent } from './review/review.component';
import { SelectedCoffeePageComponent } from './selected-coffee-page/selected-coffee-page.component'

@NgModule({
  // components get declared
  declarations: [
    AppComponent,
    SplashComponent,
    RegisterComponent,
    LoginComponent,
    SelectionPageComponent,
    SelectedRoastPageComponent,
    CheckoutComponent,
    ReviewComponent,
    SelectedCoffeePageComponent,
    PaymentDialog,
  ],
  entryComponents: [PaymentDialog],

  imports: [
    //modules get imported
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  providers: [

    //services get provided
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

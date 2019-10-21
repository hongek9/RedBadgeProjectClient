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
import { SelectedRoastPageComponent, ReviewDialog, UpdateDialog } from './selected-roast-page/selected-roast-page.component';
import { CheckoutComponent, PaymentDialog, EasterDialog } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

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
    PaymentDialog,
    NavbarComponent,
    EasterDialog,
    ReviewDialog,
    UpdateDialog,
  ],
  entryComponents: [PaymentDialog, EasterDialog, ReviewDialog, UpdateDialog],

  imports: [
    //modules get imported
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    //services get provided
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

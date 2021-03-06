
import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoffeeService } from '../coffee.service';
import { CoffeeResult } from '../coffeeResults';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  selectedCoffee: any;
  // buyNow: any;
  coffee: CoffeeResult[]
  checkout: any;

  constructor(public dialog: MatDialog, private coffeeService : CoffeeService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentDialog, {
      width: '500px',
      height: '400px', 
    });
  }
  openEaster(): void {
    const dialogRef = this.dialog.open(EasterDialog, {
      width: '500px',
      height: '500px',
    });
  }

  ngOnInit() { 
    this.getCheckout();
    // this.coffeeService.cartCoffees.subscribe((coffee:CoffeeResult) => console.log(coffee)
    // )
    this.coffeeService.cartCoffees.subscribe(data => {this.coffee = data; console.log(data)});
    this.runthis();
  }
// Here OnInit we are subscribing to the coffees through the coffee service file
  // displayCheckout() :void {
  //   this.coffeeService.cartCoffees.subscribe(data => {this.coffee = data; console.log(data)});
  // }
  runthis() :void {
    console.log(localStorage.getItem('checkout'));
  }

  

  // ****
  // Retrieving data from local storage
  // ****

  getCheckout() {
    if (localStorage.getItem('checkout')===null) {
      this.checkout;
    } else {
      this.checkout = JSON.parse(localStorage.getItem('checkout'));
      // console.log(this.checkout[1])
      }
    }   
  }

@Component({
  selector: 'payment-dialog',
  templateUrl: 'payment-dialog.html',
})
export class PaymentDialog{
  constructor(
    public dialogRef: MatDialogRef<PaymentDialog>,
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    
}

@Component({
  selector: 'easter-dialog',
  templateUrl: 'easter-dialog.html',
  styleUrls: ['easter-dialog.css']
})
export class EasterDialog{
  constructor(public dialogRef: MatDialogRef<EasterDialog>,){}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
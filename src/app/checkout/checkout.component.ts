import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SelectedCoffeePageComponent } from '../selected-coffee-page/selected-coffee-page.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  selectedCoffee: any;
  // buyNow: any;

  @Input() checkout: string [];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentDialog, {
      width: '250px'
    });
  }

  ngOnInit() {
    this.runthis();
  }

  addToCheckout(coffee:any): void {
    this.selectedCoffee = coffee;
    // this.buyNow = [];
  }
 runthis():void {
   console.log(this.checkout);
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

import { Component, Inject, } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentDialog, {
      width: '250px'
    });
  }

  ngOnInit() {
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

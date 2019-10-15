import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(public dialog: MatDialog,) {}

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
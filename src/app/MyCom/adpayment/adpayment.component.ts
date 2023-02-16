import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/MyModel/payment.model';
import { PaymentService } from 'src/app/MyService/payment.service';

@Component({
  selector: 'app-adpayment',
  templateUrl: './adpayment.component.html',
  styleUrls: ['./adpayment.component.css']
})
export class AdpaymentComponent implements OnInit{
  payment: Payment[] = [];
  
  constructor(public paymentservice: PaymentService) { }

  ngOnInit(): void {
    this.paymentservice.getAll().subscribe((data: Payment[])=>{
      this.payment = data;
      console.log(this.payment);
    })  
  }
  delete(id:number){
    this.paymentservice.delete(id).subscribe(res => {
         this.payment = this.payment.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}

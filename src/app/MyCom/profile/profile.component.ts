import { Component, OnInit } from '@angular/core';
import { Admission } from 'src/app/MyModel/admission.model';
import { Payment } from 'src/app/MyModel/payment.model';
import { AdmissionService } from 'src/app/MyService/admission.service';
import { PaymentService } from 'src/app/MyService/payment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  payment: Payment[] = [];
  constructor(public paymentservice: PaymentService) { }


  ngOnInit(): void {
    this.paymentservice.getAll().subscribe((data: Payment[])=>{
      this.payment = data;
      console.log(this.payment);
    })  
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from 'src/app/MyModel/payment.model';
import { PaymentService } from 'src/app/MyService/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  addForm!: FormGroup;
  payment!: Payment[];

  constructor(
    public paymentservice: PaymentService,
    private router: Router
  ) { }


  ngOnInit(): void {
     this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required)

    });
    
  }
  get trainee(){
    return this.addForm.controls;
  }
  
  submit(){
    Swal.fire('Payment Successfull!', 'Your request has been processed.', 'success');
    console.log(this.addForm.value);
    this.paymentservice.create(this.addForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
        //  this.router.navigateByUrl('post/profile');
    })
  }
  print() {
    window.print();
  }

}

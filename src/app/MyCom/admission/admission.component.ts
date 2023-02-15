import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admission } from 'src/app/MyModel/admission.model';
import { AdmissionService } from 'src/app/MyService/admission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit{

  addForm!: FormGroup;
  admission!: Admission[];
  constructor(
    public admissionservice: AdmissionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      fathername: new FormControl('', Validators.required),
      mothername: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      passport: new FormControl('', Validators.required),
      nid: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      
    });
    
  }
  get trainee(){
    return this.addForm.controls;
  }
  
  submit(){
    Swal.fire('Success!', 'Your request has been processed.', 'success');
    console.log(this.addForm.value);
    this.admissionservice.create(this.addForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
}

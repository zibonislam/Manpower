import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aaadmission } from 'src/app/MyModel/aaadmission.model';
import { Admission } from 'src/app/MyModel/admission.model';
import { AaadmissionService } from 'src/app/MyService/aaadmission.service';
import { AdmissionService } from 'src/app/MyService/admission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aaadmission',
  templateUrl: './aaadmission.component.html',
  styleUrls: ['./aaadmission.component.css']
})
export class AaadmissionComponent implements OnInit {
  id!: number;
  admissions!: Admission;

  addForm!: FormGroup;
  admission!: Admission[];
  constructor(
    public admissionservice: AdmissionService,
    public aaadmissionservice : AaadmissionService,
    private router: Router,
    public route : ActivatedRoute
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
      training: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),

      
    });
    this.id = this.route.snapshot.params['postId'];
    this.admissionservice.find(this.id).subscribe((data: Admission)=>{
      this.admissions = data;

      this.addForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(this.admissions.name),
        fathername: new FormControl(this.admissions.fathername),
        mothername: new FormControl(this.admissions.mothername),
        dob: new FormControl(this.admissions.dob),
        passport: new FormControl(this.admissions.passport),
        nid: new FormControl(this.admissions.nid),
        email: new FormControl(this.admissions.email),
        training: new FormControl(),
        company: new FormControl(),
        country: new FormControl()
      });
    }); 
    
  }
  get trainee(){
    return this.addForm.controls;
  }
  
  update(){
    Swal.fire('Update Successfull!', 'Your request has been processed.', 'success');
    console.log('Update---', this.addForm.value)
    this.aaadmissionservice.create(this.addForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
        //  this.router.navigateByUrl('post/index');
    })
  }

}

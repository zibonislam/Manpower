import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from 'src/app/MyModel/job.model';
import { JobService } from 'src/app/MyService/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit{

 addjob! :FormGroup
  job! :Job[]

  constructor(  
    public jobservice: JobService,
    private router: Router){

  }

  ngOnInit(): void {
    this.addjob = new FormGroup({
      id: new FormControl('', [Validators.required]),
      companyname: new FormControl('', Validators.required),
      jobcontext: new FormControl('', Validators.required),
      responsibilities: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      requirements: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),

    });
    
  }

  create(){
    Swal.fire('Success!', 'Your request has been processed.', 'success');
    console.log(this.addjob.value);
    this.jobservice.create(this.addjob.value).subscribe((res:any) => {
      console.log('Post created successfully!');
     //  this.router.navigateByUrl('post/index');
 })
    
  }

}

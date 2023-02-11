import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission } from 'src/app/MyModel/admission.model';
import { AdmissionService } from 'src/app/MyService/admission.service';

@Component({
  selector: 'app-aaadmission',
  templateUrl: './aaadmission.component.html',
  styleUrls: ['./aaadmission.component.css']
})
export class AaadmissionComponent implements OnInit {
  
  id!: number;
  post!: Post;
  form!: FormGroup;


  constructor( public admissionservice: AdmissionService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.admissionservice.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
      
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
    
  }

}

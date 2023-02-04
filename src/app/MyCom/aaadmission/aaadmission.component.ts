import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission } from 'src/app/MyModel/admission.model';
import { AdmissionService } from 'src/app/MyService/admission.service';

@Component({
  selector: 'app-aaadmission',
  templateUrl: './aaadmission.component.html',
  styleUrls: ['./aaadmission.component.css']
})
export class AaadmissionComponent implements OnInit {


  constructor( public admissionservice: AdmissionService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['traineeId'];
        
    // this.admissionservice.find(this.id).subscribe((data: Admission)=>{
    //   this.post = data;
    // });
  }

}

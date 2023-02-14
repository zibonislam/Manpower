import { Component, OnInit } from '@angular/core';
import { Aaadmission } from 'src/app/MyModel/aaadmission.model';
import { Admission } from 'src/app/MyModel/admission.model';
import { AaadmissionService } from 'src/app/MyService/aaadmission.service';

@Component({
  selector: 'app-govt',
  templateUrl: './govt.component.html',
  styleUrls: ['./govt.component.css']
})
export class GovtComponent implements OnInit {

  aaadmission!: Aaadmission;
  id!: number;

  constructor(public aaadmissionService: AaadmissionService) { }

  ngOnInit(): void {
       
  }

  search() {
    this.aaadmissionService.getById(this.id).subscribe((data: Aaadmission)=>{
      this.aaadmission = data;
    }) 
  }

}

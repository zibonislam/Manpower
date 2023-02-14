import { Component, OnInit } from '@angular/core';
import { Aaadmission } from 'src/app/MyModel/aaadmission.model';
import { AaadmissionService } from 'src/app/MyService/aaadmission.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit{


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

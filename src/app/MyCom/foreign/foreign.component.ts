import { Component, OnInit } from '@angular/core';
import { Aaadmission } from 'src/app/MyModel/aaadmission.model';
import { AaadmissionService } from 'src/app/MyService/aaadmission.service';

@Component({
  selector: 'app-foreign',
  templateUrl: './foreign.component.html',
  styleUrls: ['./foreign.component.css']
})
export class ForeignComponent  implements OnInit{

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

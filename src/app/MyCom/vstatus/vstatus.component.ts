import { Component, OnInit } from '@angular/core';
import { Traineeverification } from 'src/app/MyModel/traineeverification.model';
import { AdverifyupdateService } from 'src/app/MyService/adverifyupdate.service';

@Component({
  selector: 'app-vstatus',
  templateUrl: './vstatus.component.html',
  styleUrls: ['./vstatus.component.css']
})
export class VstatusComponent implements OnInit {
  traineeverification!: Traineeverification;
  id!: number;

  constructor(public adverifyupdate: AdverifyupdateService) { }

  ngOnInit(): void {
  }
  search() {
    this.adverifyupdate.getById(this.id).subscribe((data: Traineeverification)=>{
      this.traineeverification = data;
    }) 
  }

}

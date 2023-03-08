import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/MyModel/job.model';
import { JobService } from 'src/app/MyService/job.service';

@Component({
  selector: 'app-joboffer',
  templateUrl: './joboffer.component.html',
  styleUrls: ['./joboffer.component.css']
})
export class JobofferComponent implements OnInit {

  jobs: Job[] = [];
  constructor(public jobservice: JobService) { }

  ngOnInit(): void {

    this.jobservice.getAll().subscribe((data: Job[])=>{
      this.jobs = data;
      console.log(this.jobs);
    }) 
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Admission } from 'src/app/MyModel/admission.model';
import { AdmissionService } from 'src/app/MyService/admission.service';

@Component({
  selector: 'app-aadmission',
  templateUrl: './aadmission.component.html',
  styleUrls: ['./aadmission.component.css']
})
export class AadmissionComponent implements OnInit {

  posts: Admission[] = [];
  constructor(public admissionservice: AdmissionService) { }

  ngOnInit(): void {
      this.admissionservice.getAll().subscribe((data: Admission[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
  deleteTrainee(id:number){
    // this.admissionservice.delete(id).subscribe(res => {
    //      this.trainee = this.posts.filter(item => item.id !== id);
    //      console.log('Post deleted successfully!');
    // })
  }

}

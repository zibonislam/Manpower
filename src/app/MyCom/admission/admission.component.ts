import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admission } from 'src/app/MyModel/admission.model';
import { AdmissionService } from 'src/app/MyService/admission.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private admissionService:AdmissionService){}

  addForm!: FormGroup;
  admission!: Admission[];
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[''],
      name:[''],
      fathername:[''],
      mothername:[''],
      dob:[''],
      passport:[''],
      nid:[''],
      email:[''],

    });
    this.admissionService.getTrainee().subscribe((data:Admission[]) => {
      this.admission = data;
    });
    
  }
  add(){
    this.admissionService.saveTrainee(this.addForm.value).subscribe(data=>{this.ngOnInit();});
  }

  deleteTrainee(trainee:Trainee): void {
    this.admissionService.deleteTrainee(trainee.id).subscribe(data=>{this.ngOnInit();});
  }

  editTrainee(trainee:Trainee): void {
    localStorage.setItem('editTraineeId', trainee.id.toString());
    let traineeId = localStorage.getItem('editTraineeId');
    
    if(+traineeId > 0){
      this.admissionService.getTraineeById(+traineeId).subscribe(data => {
        this.addForm.patchValue(data);
    })
     
  }
}

update(){
  this.admissionService.updateTrainee(this.addForm.value).subscribe(data=>{this.ngOnInit();});
}


}

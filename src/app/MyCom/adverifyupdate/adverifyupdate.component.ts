import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vapply } from 'src/app/MyModel/vapply.model';
import { AdverifyupdateService } from 'src/app/MyService/adverifyupdate.service';
import { VapplyService } from 'src/app/MyService/vapply.service';

@Component({
  selector: 'app-adverifyupdate',
  templateUrl: './adverifyupdate.component.html',
  styleUrls: ['./adverifyupdate.component.css']
})
export class AdverifyupdateComponent implements OnInit {

  id!: number;
  verifications!: Vapply;

  addForm!: FormGroup;
  verification!: Vapply[];
  constructor(
    public verificationservice: VapplyService,
    public adverifyupdateservice : AdverifyupdateService,
    private router: Router,
    public route : ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      passport: new FormControl('', Validators.required),
      nid: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      trainee_status: new FormControl('', Validators.required),
      permit_status: new FormControl('', Validators.required),
      

      
    });
    this.id = this.route.snapshot.params['traineeId'];
    this.verificationservice.find(this.id).subscribe((data: Vapply)=>{
      this.verifications = data;
    }); 
  }
  get trainee(){
    return this.addForm.controls;
  }
  
  update(){
    console.log(this.addForm.value);
    this.adverifyupdateservice.create(this.addForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
        //  this.router.navigateByUrl('post/index');
    })
  }

}

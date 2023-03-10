import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vapply } from 'src/app/MyModel/vapply.model';
import { VapplyService } from 'src/app/MyService/vapply.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vapply',
  templateUrl: './vapply.component.html',
  styleUrls: ['./vapply.component.css']
})
export class VapplyComponent implements OnInit {
  addForm!: FormGroup;
  vapply! :Vapply[];

  constructor(
    public vapplyservice: VapplyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      passport: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),

      nid: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
   
   
  }

verify() {console.log(this.addForm.value);
  Swal.fire('Success!', 'Your request has been processed.', 'success');
  console.log(this.addForm.value)
  this.vapplyservice.create(this.addForm.value).subscribe((res:any) => {
       console.log('Post created successfully!');
      //  this.router.navigateByUrl('/admin/adverification');
  })

}

get trainee(){
  return this.addForm.controls;
}


  

  

}



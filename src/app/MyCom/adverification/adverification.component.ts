import { Component, OnInit } from '@angular/core';
import { Vapply } from 'src/app/MyModel/vapply.model';
import { VapplyService } from 'src/app/MyService/vapply.service';

@Component({
  selector: 'app-adverification',
  templateUrl: './adverification.component.html',
  styleUrls: ['./adverification.component.css']
})
export class AdverificationComponent implements OnInit{
  

 verification : Vapply[] = [];
  constructor(public verificationservice: VapplyService) { }

  ngOnInit(): void {
      this.verificationservice.getAll().subscribe((data: Vapply[])=>{
      this.verification = data;
      console.log(this.verification);
    })  
  }
  deleteTrainee(id:number){
    this.verificationservice.delete(id).subscribe(res => {
         this.verification = this.verification.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}

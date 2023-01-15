import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './MyCom/admission/admission.component';
import { DepartmentComponent } from './MyCom/department/department.component';
import { HomeComponent } from './MyCom/home/home.component';
import { LoginComponent } from './MyCom/login/login.component';
import { RecruitmentComponent } from './MyCom/recruitment/recruitment.component';
import { RegistrationComponent } from './MyCom/registration/registration.component';
import { RemittanceComponent } from './MyCom/remittance/remittance.component';
import { SignupComponent } from './MyCom/signup/signup.component';
import { TrainingComponent } from './MyCom/training/training.component';
import { VerificationComponent } from './MyCom/verification/verification.component';

const routes: Routes = [
  {path:"", redirectTo:"/login",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"department", component:DepartmentComponent},
  {path:"admission", component:AdmissionComponent},
  {path:"recruitment", component:RecruitmentComponent},
  {path:"training", component:TrainingComponent},
  {path:"verification", component:VerificationComponent},
  {path:"signup", component:SignupComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"remittance", component:RemittanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

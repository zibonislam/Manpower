import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './MyCom/admin/admin.component';
import { AdmissionComponent } from './MyCom/admission/admission.component';
import { CorporateComponent } from './MyCom/corporate/corporate.component';
import { DepartmentComponent } from './MyCom/department/department.component';
import { ForeignComponent } from './MyCom/foreign/foreign.component';
import { GovtComponent } from './MyCom/govt/govt.component';
import { HomeComponent } from './MyCom/home/home.component';
import { LoginComponent } from './MyCom/login/login.component';
import { ProfileComponent } from './MyCom/profile/profile.component';
import { RecruitmentComponent } from './MyCom/recruitment/recruitment.component';
import { RegistrationComponent } from './MyCom/registration/registration.component';
import { RemittanceComponent } from './MyCom/remittance/remittance.component';
import { SignupComponent } from './MyCom/signup/signup.component';
import { TrainingComponent } from './MyCom/training/training.component';
import { VapplyComponent } from './MyCom/vapply/vapply.component';
import { VerificationComponent } from './MyCom/verification/verification.component';
import { VstatusComponent } from './MyCom/vstatus/vstatus.component';
import { WorkpermitComponent } from './MyCom/workpermit/workpermit.component';

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
  {path:"remittance", component:RemittanceComponent},
  {path:"govt", component:GovtComponent},
  {path:"corporate", component:CorporateComponent},
  {path:"foreign", component:ForeignComponent},
  {path:"vapply", component:VapplyComponent},
  {path:"vstatus", component:VstatusComponent},
  {path:"workpermit", component:WorkpermitComponent},
  {path:"profile", component:ProfileComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaadmissionComponent } from './MyCom/aaadmission/aaadmission.component';
import { AadmissionComponent } from './MyCom/aadmission/aadmission.component';
import { AdminComponent } from './MyCom/admin/admin.component';
import { AdmissionComponent } from './MyCom/admission/admission.component';
import { CorporateComponent } from './MyCom/corporate/corporate.component';
import { DepartmentComponent } from './MyCom/department/department.component';
import { ForeignComponent } from './MyCom/foreign/foreign.component';
import { GovtComponent } from './MyCom/govt/govt.component';
import { HeadhuntComponent } from './MyCom/headhunt/headhunt.component';
import { HomeComponent } from './MyCom/home/home.component';
import { LoginComponent } from './MyCom/login/login.component';
import { OperationComponent } from './MyCom/operation/operation.component';
import { PermitComponent } from './MyCom/permit/permit.component';
import { PlacementComponent } from './MyCom/placement/placement.component';
import { ProfileComponent } from './MyCom/profile/profile.component';
import { RecruitmentComponent } from './MyCom/recruitment/recruitment.component';
import { RegistrationComponent } from './MyCom/registration/registration.component';
import { RemittanceComponent } from './MyCom/remittance/remittance.component';
import { RheadhuntingComponent } from './MyCom/rheadhunting/rheadhunting.component';
import { RplacementComponent } from './MyCom/rplacement/rplacement.component';
import { RworkpermitComponent } from './MyCom/rworkpermit/rworkpermit.component';
import { SelectionComponent } from './MyCom/selection/selection.component';
import { ServiceComponent } from './MyCom/service/service.component';
import { SignupComponent } from './MyCom/signup/signup.component';
import { SupplyComponent } from './MyCom/supply/supply.component';
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
  {path:"selection", component:SelectionComponent},
  {path:"service", component:ServiceComponent},
  {path:"headhunt", component:HeadhuntComponent},
  {path:"placement",component:PlacementComponent},
  {path:"supply", component:SupplyComponent},
  {path:"permit", component:PermitComponent},
  {path:"operation", component:OperationComponent},
  {path:"admin", component:AdminComponent,children:[
      {path:"aadmission", component:AadmissionComponent},
      {path:"rheadhunting", component:RheadhuntingComponent},
      {path:"rplacement", component:RplacementComponent},
      {path:"rworkpermit", component:RworkpermitComponent},
      {path:"aaadmission", component: AaadmissionComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

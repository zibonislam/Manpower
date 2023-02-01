import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyCom/login/login.component';
import { HomeComponent } from './MyCom/home/home.component';
import { DepartmentComponent } from './MyCom/department/department.component';
import { AdmissionComponent } from './MyCom/admission/admission.component';
import { RecruitmentComponent } from './MyCom/recruitment/recruitment.component';
import { TrainingComponent } from './MyCom/training/training.component';
import { VerificationComponent } from './MyCom/verification/verification.component';
import { RegistrationComponent } from './MyCom/registration/registration.component';
import { SignupComponent } from './MyCom/signup/signup.component';
import { RemittanceComponent } from './MyCom/remittance/remittance.component';
import { GovtComponent } from './MyCom/govt/govt.component';
import { CorporateComponent } from './MyCom/corporate/corporate.component';
import { ForeignComponent } from './MyCom/foreign/foreign.component';
import { VapplyComponent } from './MyCom/vapply/vapply.component';
import { VstatusComponent } from './MyCom/vstatus/vstatus.component';
import { WorkpermitComponent } from './MyCom/workpermit/workpermit.component';
import { ProfileComponent } from './MyCom/profile/profile.component';
import { AdminComponent } from './MyCom/admin/admin.component';
import { SelectionComponent } from './MyCom/selection/selection.component';
import { ServiceComponent } from './MyCom/service/service.component';
import { HeadhuntComponent } from './MyCom/headhunt/headhunt.component';
import { PlacementComponent } from './MyCom/placement/placement.component';
import { SupplyComponent } from './MyCom/supply/supply.component';
import { PermitComponent } from './MyCom/permit/permit.component';
import { OperationComponent } from './MyCom/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DepartmentComponent,
    AdmissionComponent,
    RecruitmentComponent,
    TrainingComponent,
    VerificationComponent,
    RegistrationComponent,
    SignupComponent,
    RemittanceComponent,
    GovtComponent,
    CorporateComponent,
    ForeignComponent,
    VapplyComponent,
    VstatusComponent,
    WorkpermitComponent,
    ProfileComponent,
    AdminComponent,
    SelectionComponent,
    ServiceComponent,
    HeadhuntComponent,
    PlacementComponent,
    SupplyComponent,
    PermitComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    ForeignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

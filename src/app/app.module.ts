import { JwtInterceptor } from './jwt.interceptor';
import { PatientService } from './patients/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './patients/add-patient.component';
import { EditPatientComponent } from './patients/edit-patient.component';
import { CreatePhysicianComponent } from './physicians/create-physician.component';
import { LoginComponent } from './physicians/login.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewComponent } from './pdfView/pdf-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientComponent,
    EditPatientComponent,
    CreatePhysicianComponent,
    LoginComponent,
    PdfViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    PatientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

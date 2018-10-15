import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './physicians/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './patients/add-patient.component';
import { CreatePhysicianComponent } from './physicians/create-physician.component';
import { PdfViewComponent } from './pdfView/pdf-view.component';

declare var require: any;

const routes: Routes = [
    {path: '', component: PatientsComponent, canActivate: [AuthenticationService]},
    {path: 'add-patient', component: AddPatientComponent, canActivate: [AuthenticationService]},
    {path: 'create-account', component: CreatePhysicianComponent},
    {path: 'login', component: LoginComponent},
    {path: 'pdf/:id', component: PdfViewComponent},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

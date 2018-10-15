import { Router } from '@angular/router';
import { PdfService } from './../pdfView/pdf.service';
import { PatientService } from './patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient;
  sexOptions: string[] = ['Male', 'Female'];
  cancerTypes: string[] = ['Breast', 'Colon', 'Prostate'];
  cancerStages: number[] = [0, 1, 2, 3, 4];

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addNew(): void {
    this.patientService.addPatient(this.patient).subscribe(() => this.router.navigate(['/']));
  }

}

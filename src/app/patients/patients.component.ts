import { EditPatientComponent } from './edit-patient.component';
import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Array<Patient>;
  selectedPatient: Patient = new Patient;

  displayedColumns: string[] = ['firstName', 'lastName', 'age',
  'sex', 'cancerType', 'cancerStage', 'submissionDate'];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    const physicianId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.patientService.getByPhysicianId(physicianId).subscribe(res => {
      this.patients = res;
    });
  }

  selectPatient(patient: Patient) {
    this.selectedPatient = patient;
  }

}

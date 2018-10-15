import { PatientService } from './patient.service';
import { Patient } from './patient';
import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnChanges {

  @Input() patientId: number;
  @Output() updateTable = new EventEmitter<any>();
  patient: Patient = new Patient();
  sexOptions: string[] = ['Male', 'Female'];
  cancerTypes: string[] = ['Breast', 'Colon', 'Prostate'];
  cancerStages: number[] = [0, 1, 2, 3, 4];

  constructor(
    private patientService: PatientService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.patientId !== undefined) {
      this.patientService.getById(this.patientId).subscribe(patient => this.patient = patient);
    }
  }

  savePatient(): void {
    this.patientService.editPatient(this.patient).subscribe(() => this.updateTable.emit(null));
  }

  deletePatient(): void {
    this.patientService.deletePatient(this.patient.id).subscribe();
  }

}

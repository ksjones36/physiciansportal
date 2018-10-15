import { Patient } from './patient';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PatientService {

  private patientUrl = '/server/api/patients';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getByPhysicianId(id: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.patientUrl}/physician/${id}`);
  }

  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.patientUrl}/${id}`);
  }

  addPatient(patient: Patient): Observable<Patient> {
    patient.submissionDate = moment().format(moment.HTML5_FMT.DATETIME_LOCAL);
    patient.physicianId = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<Patient>(this.patientUrl, patient, httpOptions);
  }

  editPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.patientUrl, patient, httpOptions);
  }

  deletePatient(id: number): Observable<Patient> {
    const url = `${this.patientUrl}/${id}`;
    return this.http.delete<Patient>(url);
  }

}

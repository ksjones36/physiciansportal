import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Physician } from './physician';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PhysiciansService {

  constructor(private http: HttpClient) { }

  private physicianUrl = '/server/api/physicians';

  getAll(): Observable<Physician[]> {
    return this.http.get<Physician[]>(this.physicianUrl);
  }

  getById(id: number): Observable<Physician> {
    return this.http.get<Physician>(`${this.physicianUrl}/${id}`);
  }

  checkUserName(userName: String): Observable<Physician> {
    return this.http.get<Physician>(`${this.physicianUrl}/username/${userName}`);
  }

  checkEmail(email: String): Observable<Physician> {
    return this.http.get<Physician>(`${this.physicianUrl}/email/${email}`);
  }

  checkUserOrEmail(userName: String, email: String): Observable<Physician> {
    return this.http.get<Physician>(`${this.physicianUrl}/useroremail/${userName}/${email}`);
  }

  checkLogin(userName: String, password: String): Observable<Physician> {
    return this.http.get<Physician>(`${this.physicianUrl}/${userName}/${password}`);
  }

  addPhysician(physician: Physician): Observable<Physician> {
    return this.http.post<Physician>(this.physicianUrl, physician, httpOptions);
  }

  editPhysician(physician: Physician): Observable<Physician> {
    return this.http.put<Physician>(this.physicianUrl, physician, httpOptions);
  }

  deletePhysician(id: number): Observable<Physician> {
    return this.http.delete<Physician>(`${this.physicianUrl}/${id}`);
  }
}

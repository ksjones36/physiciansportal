import { Observable } from 'rxjs';
import { Report } from './report';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  private pdfUrl = '/server/api/reports';

  getById(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.pdfUrl}/${id}`);
  }

}

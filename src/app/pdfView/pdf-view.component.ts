import { Report } from './report';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {

  pdfSrc: String;
  pdf: Report = new Report();

  constructor(
    private route: ActivatedRoute,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pdfService.getById(params['id']).subscribe((pdf) => {
        if (pdf === null) {
          this.pdfSrc = '../../../PDFReports/notFound.pdf';
        } else {
          this.pdfSrc = pdf.pdfLocation;
        }
      });
    });
  }

}

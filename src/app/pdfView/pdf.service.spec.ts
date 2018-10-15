import { PdfService } from './pdf.service';
import { TestBed } from '@angular/core/testing';


describe('PdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfService = TestBed.get(PdfService);
    expect(service).toBeTruthy();
  });
});

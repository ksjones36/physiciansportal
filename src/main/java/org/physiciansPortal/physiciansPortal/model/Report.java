package org.physiciansPortal.physiciansPortal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="reports")
public class Report {
	
	//@Column(name = "id", updatable = false, nullable = false)
	
	@Id
	@Column(name = "patient_id")
	private long patientId;
	
	@Column(name = "pdf_location")
	private String pdfLocation;
	
	public long getPatientId() {
		return patientId;
	}
	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public String getPdfLocation() {
		return pdfLocation;
	}
	public void setPdfLocation(String pdfLocation) {
		this.pdfLocation = pdfLocation;
	}

}

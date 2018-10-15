package org.physiciansPortal.physiciansPortal.controllers;

import java.util.List;

import org.physiciansPortal.physiciansPortal.model.Report;
import org.physiciansPortal.physiciansPortal.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reports")
public class ReportsController {

	@Autowired
	private ReportRepository reportRepository;
	
	@GetMapping
	public List<Report> getAll(){
		return reportRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Report get(@PathVariable("id") long id) {
		return reportRepository.findByPatientId(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Report report) {
		reportRepository.save(report);
	}
	
	
}

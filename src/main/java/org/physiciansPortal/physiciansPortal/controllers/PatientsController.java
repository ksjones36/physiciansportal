package org.physiciansPortal.physiciansPortal.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.physiciansPortal.physiciansPortal.model.Patient;
import org.physiciansPortal.physiciansPortal.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/patients")
public class PatientsController {
	
	@Autowired
	private PatientRepository patientRepository;

	@GetMapping
	public List<Patient> list() {
		return patientRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Patient get(@PathVariable("id") long id) {
		return patientRepository.getOne(id);
	}
	
	@GetMapping("/physician/{id}")
	public List<Patient> getByPhysicianId(@PathVariable("id") long id) {
		return patientRepository.findByPhysicianId(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Patient patient) {
		patientRepository.save(patient);
	}
	
	@PutMapping()
	public void put(@RequestBody Patient patient) {
		patientRepository.save(patient);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") long id) {
		patientRepository.deleteById(id);
	}
	
}

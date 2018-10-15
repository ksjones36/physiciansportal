package org.physiciansPortal.physiciansPortal.controllers;

import java.util.List;

import org.physiciansPortal.physiciansPortal.model.Physician;
import org.physiciansPortal.physiciansPortal.repository.PhysicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/physicians")
public class PhysiciansController {
	
	@Autowired
	private PhysicianRepository physicianRepository;
	
	@GetMapping
	public List<Physician> list() {
		return physicianRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Physician get(@PathVariable("id") long id) {
		return physicianRepository.getOne(id);
	}
	
	@GetMapping("/username/{username}")
	public Physician getByUsername(@PathVariable("username") String username) {
		return physicianRepository.findByUserName(username);
	}
	
	@GetMapping("/email/{email}")
	public Physician getByEmail(@PathVariable("email") String email) {
		return physicianRepository.findByEmail(email);
	}
	
	@GetMapping("/{username}/{password}")
	public Physician getByUserAndPass(@PathVariable("username") String username, @PathVariable("password") String password) {
		return physicianRepository.findByUserNameAndPassword(username, password);
	}
	
	@GetMapping("useroremail/{username}/{email}")
	public Physician getByUserOrEmail(@PathVariable("username") String username, @PathVariable("email") String email) {
		return physicianRepository.findByUserNameOrEmail(username, email);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Physician physician) {
		physicianRepository.save(physician);
	}
	
	@PutMapping()
	public void put(@RequestBody Physician physician) {
		physicianRepository.save(physician);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") long id) {
		physicianRepository.deleteById(id);
	}

}

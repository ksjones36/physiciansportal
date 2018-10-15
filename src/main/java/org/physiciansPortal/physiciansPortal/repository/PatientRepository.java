package org.physiciansPortal.physiciansPortal.repository;

import java.util.List;

import org.physiciansPortal.physiciansPortal.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
// import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "patient", path = "patients")
public interface PatientRepository extends JpaRepository<Patient, Long>{

	List<Patient> findByLastName(@Param("name") String name);
	
	List<Patient> findByPhysicianId(@Param("id") long id);
	
}

package org.physiciansPortal.physiciansPortal.repository;

import org.physiciansPortal.physiciansPortal.model.Physician;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface PhysicianRepository  extends JpaRepository<Physician, Long>{

	Physician findByUserName(@Param("name") String name);
	
	Physician findByEmail(@Param("email") String email);
	
	Physician findByUserNameOrEmail(@Param("name") String name, @Param("email") String email);
	
	Physician findByUserNameAndPassword(@Param("name") String name, @Param("password") String password);
}

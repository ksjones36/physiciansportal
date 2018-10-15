package org.physiciansPortal.physiciansPortal.repository;

import org.physiciansPortal.physiciansPortal.model.Report;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "report", path = "reports")
public interface ReportRepository extends JpaRepository<Report, Long>{
	Report findByPatientId(@Param("id") Long id);
}

package org.physiciansPortal.physiciansPortal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="patients")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "age")
	private int age;
	@Column(name = "sex")
	private String sex;
	@Column(name = "cancer_type")
	private String cancerType;
	@Column(name = "cancer_stage")
	private int cancerStage;
	@Column(name = "submission_date", columnDefinition="TIMESTAMP WITH TIME ZONE")
	private Date submissionDate;
	@Column(name = "physician_id")
	private long physicianId;
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getCancerType() {
		return cancerType;
	}
	public void setCancerType(String cancerType) {
		this.cancerType = cancerType;
	}
	public int getCancerStage() {
		return cancerStage;
	}
	public void setCancerStage(int cancerStage) {
		this.cancerStage = cancerStage;
	}
	public Date getsubmissionDate() {
		return submissionDate;
	}
	public void setsubmissionDate(Date submissionDate) {
		this.submissionDate = submissionDate;
	}
	public long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getPhysicianId() {
		return physicianId;
	}
	public void setPhysicianId(long physicianId) {
		this.physicianId = physicianId;
	}
	
}

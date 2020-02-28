package com.stub.demo.masters;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "StudentMaster")
public class StudentMasterEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer studentId;
	private String studentName;
	@Column(name = "DOB")
	private String studentDOB;
	@Column(name = "studentClass")
	private String studentStandard;
	@Column(name = "DOJ")
	private String studentDOJ;
	private String fees;
	@Column(name = "studentRating")
	private String ratings;

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getStudentDOB() {
		return studentDOB;
	}

	public void setStudentDOB(String studentDOB) {
		this.studentDOB = studentDOB;
	}

	public String getStudentStandard() {
		return studentStandard;
	}

	public void setStudentStandard(String studentStandard) {
		this.studentStandard = studentStandard;
	}

	public String getStudentDOJ() {
		return studentDOJ;
	}

	public void setStudentDOJ(String studentDOJ) {
		this.studentDOJ = studentDOJ;
	}

	public String getFees() {
		return fees;
	}

	public void setFees(String fees) {
		this.fees = fees;
	}

	public String getRatings() {
		return ratings;
	}

	public void setRatings(String ratings) {
		this.ratings = ratings;
	}

}

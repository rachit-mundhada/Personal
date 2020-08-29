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
	@Column(name="imageUrl")
	private String imageUrl;
	@Column(name="studentEmail")
	private String email;
	@Column(name="studentPhone")
	private String phone;
	private String notification;
	
	
	
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

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

	public String getNotification() {
		return notification;
	}

	public void setNotification(String notification) {
		this.notification = notification;
	}

}

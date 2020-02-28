package com.stub.demo.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class StudentRequest {

	@NotBlank(message = "Student Name cannot be empty.")
	private String studentName;
	@NotNull(message = "Student id cannot be null.")
	private String studentId;
	private String studentClass;
	private String studentDOB;
	private String studentDOJ;
	private String fees;
	private String imageUrl;
	private String studentRating;
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getStudentClass() {
		return studentClass;
	}
	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}
	public String getStudentDOB() {
		return studentDOB;
	}
	public void setStudentDOB(String studentDOB) {
		this.studentDOB = studentDOB;
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
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getStudentRating() {
		return studentRating;
	}
	public void setStudentRating(String studentRating) {
		this.studentRating = studentRating;
	}
	@Override
	public String toString() {
		return "StudentRequest [studentName=" + studentName + ", studentId=" + studentId + ", studentClass="
				+ studentClass + ", studentDOB=" + studentDOB + ", studentDOJ=" + studentDOJ + ", fees=" + fees
				+ ", imageUrl=" + imageUrl + ", studentRating=" + studentRating + "]";
	}
	

	
	
	
}

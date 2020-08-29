package com.stub.demo.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.stub.demo.masters.EmailGroup;
import com.stub.demo.masters.FeeGroup;


public class StudentRequest {
	@NotBlank(message = "Student Name cannot be empty.")
	@NotNull(message="Student name can not be null")
	private String studentName;
	//@NotNull(message = "Student id cannot be null.")
	private String studentId;
	private String studentStandard;
	private String studentDOB;
	private String studentDOJ;
	private FeeGroup feeGroup;
	private String imageUrl;
	private EmailGroup emailGroup;
	private String studentRating;
	private String phone;
	private String notification;
	
	
	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getNotification() {
		return notification;
	}
	public void setNotification(String notification) {
		this.notification = notification;
	}
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
	
	public String getStudentStandard() {
		return studentStandard;
	}
	public void setStudentStandard(String studentStandard) {
		this.studentStandard = studentStandard;
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
	
	public FeeGroup getFeeGroup() {
		return feeGroup;
	}
	public void setFeeGroup(FeeGroup feeGroup) {
		this.feeGroup = feeGroup;
	}
	
	public EmailGroup getEmailGroup() {
		return emailGroup;
	}
	public void setEmailGroup(EmailGroup emailGroup) {
		this.emailGroup = emailGroup;
	}
	
	@Override
	public String toString() {
		return "StudentRequest [studentName=" + studentName + ", studentId=" + studentId + ", studentStandard="
				+ studentStandard + ", studentDOB=" + studentDOB + ", studentDOJ=" + studentDOJ + ", feeGroup="
				+ feeGroup + ", imageUrl=" + imageUrl + ", emailGroup=" + emailGroup + ", studentRating="
				+ studentRating + ", phone=" + phone + ", notification=" + notification + "]";
	}
}

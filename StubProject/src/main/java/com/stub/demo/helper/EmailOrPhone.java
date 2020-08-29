package com.stub.demo.helper;

import com.stub.demo.masters.StudentMasterEntity;
import com.stub.demo.request.StudentRequest;

public class EmailOrPhone {

	

	public static StudentMasterEntity getStudentEmailOrPhone(StudentMasterEntity studentMaster,
			StudentRequest studentRequest) {
		// TODO Auto-generated method stub
		if ((studentMaster.getNotification()!=null && studentMaster.getNotification().equalsIgnoreCase("Text"))){
			studentMaster.setPhone(studentRequest.getPhone());	
			studentMaster.setEmail("");
			System.out.println("Hi there in the pnone number ");
		}
		else{
			studentMaster.setPhone("");
			studentMaster.setEmail(studentRequest.getEmailGroup().getEmail());
			System.out.println("Hi there in the email ");
		}
		return studentMaster;
	}
	
	
}

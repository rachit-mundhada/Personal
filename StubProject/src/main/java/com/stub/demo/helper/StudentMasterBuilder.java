package com.stub.demo.helper;

import com.stub.demo.masters.EmailGroup;
import com.stub.demo.masters.FeeGroup;
import com.stub.demo.masters.StudentMasterEntity;
import com.stub.demo.masters.StudentMasterLombok;

public class StudentMasterBuilder {

	public static StudentMasterLombok getStudentMasterDetails(StudentMasterEntity studenMaster) {
		FeeGroup feeGroup = FeeGroup.builder().fees(studenMaster.getFees())
				.reFees(studenMaster.getFees()).build();
		EmailGroup emailGroup = EmailGroup.builder().confirmEmail(studenMaster.getEmail())
				.email(studenMaster.getEmail()).build();
		StudentMasterLombok student = StudentMasterLombok.builder().studentDOB(studenMaster.getStudentDOB())
				.studentDOJ(studenMaster.getStudentDOJ())
				.studentId(studenMaster.getStudentId().toString()).phone(studenMaster.getPhone())
				.studentName(studenMaster.getStudentName()).studentRating(studenMaster.getRatings())
				.studentStandard(studenMaster.getStudentStandard()).feeGroup(feeGroup).emailGroup(emailGroup)
				.build();
		return student;
	}
}

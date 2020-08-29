package com.stub.demo.masters;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@Builder
public class StudentMasterLombok {

	private String studentName;
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
	
}



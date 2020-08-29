package com.stub.demo.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.stub.demo.helper.EmailOrPhone;
import com.stub.demo.helper.StudentMasterBuilder;
import com.stub.demo.masters.EmailGroup;
import com.stub.demo.masters.FeeGroup;
import com.stub.demo.masters.StudentMasterEntity;
import com.stub.demo.masters.StudentMasterLombok;
import com.stub.demo.repository.StudentsDAOImpl;
import com.stub.demo.request.StudentRequest;

@Service
public class StudentMasterSrvc {

	@Autowired
	StudentsDAOImpl studentsDAOImpl;

	public String getAllDetailsSrvc() {
		Gson gson = new Gson();
		try {
			List<StudentMasterEntity> studentList = studentsDAOImpl.findAll();
			if (Objects.nonNull(studentList)) {
				System.out.println("Hi there...");
			}
			if (null != studentList && studentList.size() > 0) {

				return gson.toJson(studentList.stream().collect(Collectors.toSet()));

			} else {
				return "No data found";
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			return "Something went wrong. No details fetched please retry";
		}

	}

	@Transactional
	public StudentMasterLombok saveStudent(StudentRequest studentRequest) {
		// TODO Auto-generated method stub

		try {
			StudentMasterEntity studentMaster = new StudentMasterEntity();
			studentMaster.setStudentStandard(studentRequest.getStudentStandard());
			studentMaster.setFees(studentRequest.getFeeGroup().getFees());
			studentMaster.setRatings(studentRequest.getStudentRating());
			studentMaster.setStudentDOB(studentRequest.getStudentDOB());
			studentMaster.setStudentDOJ(studentRequest.getStudentDOJ());
			studentMaster.setStudentName(studentRequest.getStudentName());
			studentMaster.setNotification(studentRequest.getNotification());
			studentMaster.setImageUrl("./assets/images/Rachit.png");
			studentMaster=EmailOrPhone.getStudentEmailOrPhone(studentMaster,studentRequest);
			
			
			StudentMasterEntity studentmaster = studentsDAOImpl.save(studentMaster);
			StudentMasterLombok student = StudentMasterLombok.builder()
					.studentId(studentmaster.getStudentId().toString()).studentName(studentmaster.getStudentName())
					.build();

			return student;
		} catch (Exception e) {
			StudentMasterLombok student = StudentMasterLombok.builder().studentId(null).studentName(null)
					.studentRating("").studentDOB("").studentDOJ("").studentStandard("").build();
			return student;
		}

	}

	public String getDetailsByIdSrvc(Integer id) {
		Gson gson = new Gson();
		if (id == 0) {
			StudentMasterLombok student = StudentMasterLombok.builder().studentId("").feeGroup(null).emailGroup(null)
					.imageUrl("").notification("text").studentDOJ("").studentDOB("").studentRating("")
					.studentStandard("").studentName("").build();
			return gson.toJson(student);
		}
		Optional<StudentMasterEntity> studenMaster = studentsDAOImpl.findById(id);
		if (studenMaster.isPresent()) {
			/*
			 * FeeGroup feeGroup = FeeGroup.builder().fees(studenMaster.get().getFees())
			 * .reFees(studenMaster.get().getFees()).build(); EmailGroup emailGroup =
			 * EmailGroup.builder().confirmEmail(studenMaster.get().getEmail())
			 * .email(studenMaster.get().getEmail()).build(); StudentMasterLombok student =
			 * StudentMasterLombok.builder().studentDOB(studenMaster.get().getStudentDOB())
			 * .studentDOJ(studenMaster.get().getStudentDOJ())
			 * .studentId(studenMaster.get().getStudentId().toString())
			 * .studentName(studenMaster.get().getStudentName()).studentRating(studenMaster.
			 * get().getRatings())
			 * .studentStandard(studenMaster.get().getStudentStandard()).feeGroup(feeGroup).
			 * emailGroup(emailGroup) .build();
			 */
			
			StudentMasterLombok student=StudentMasterBuilder.getStudentMasterDetails(studenMaster.get());
			return gson.toJson(student);
		} else
			return "No details found for the student with the ID " + id;

	}

	public String deleteDetailsById(Integer id) {
		// TODO Auto-generated method stub
		studentsDAOImpl.deleteById(id);
		return new Gson().toJson("Deleted successfully...");
	}

	public String updateStudent(StudentRequest studentRequest, Integer id) {
		// TODO Auto-generated method stub
		Optional<StudentMasterEntity> studentEntity = studentsDAOImpl.findById(id);
		StudentMasterEntity entity=studentEntity.get();
		entity.setFees(studentRequest.getFeeGroup().getFees());
		entity.setRatings(studentRequest.getStudentRating());
		entity.setStudentDOB(studentRequest.getStudentDOB());
		entity.setStudentDOJ(studentRequest.getStudentDOJ());
		entity.setStudentName(studentRequest.getStudentName());
		entity.setStudentStandard(studentRequest.getStudentStandard());
		entity.setNotification(studentRequest.getNotification());
		entity=EmailOrPhone.getStudentEmailOrPhone(entity, studentRequest);
		StudentMasterEntity studentmaster = studentsDAOImpl.save(entity);
		/*
		 * StudentMasterLombok student =
		 * StudentMasterLombok.builder().studentId(studentmaster.getStudentId().toString
		 * ()) .studentName(studentmaster.getStudentName()).build();
		 */
		
		StudentMasterLombok student=StudentMasterBuilder.getStudentMasterDetails(studentmaster);
		return new Gson().toJson(student).toString();
	}
}

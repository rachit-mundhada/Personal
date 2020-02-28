package com.stub.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.stub.demo.masters.StudentMaster;
import com.stub.demo.masters.StudentMasterEntity;
import com.stub.demo.repository.StudentsDAOImpl;
import com.stub.demo.request.StudentRequest;
import com.stub.demo.responses.ResponseBody;
import com.stub.demo.responses.StudenDetailResponse;

@Service
public class StudentMasterSrvc {

	@Autowired
	StudentsDAOImpl studentsDAOImpl;

	public String getAllDetailsSrvc() {
		Gson gson = new Gson();
		try {
			List<StudentMasterEntity> studentList = studentsDAOImpl.findAll();
			if (null != studentList && studentList.size()>0) {
				return gson.toJson(studentList);

			}
			else
			{
				return "No data found";
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			return "Something went wrong. No details fetched please retry";
		}

	}
@Transactional
	public String saveStudent(StudentRequest studentRequest) {
		// TODO Auto-generated method stub
		
		try {
		StudentMasterEntity studentMaster=new StudentMasterEntity();
		studentMaster.setStudentDOB(studentRequest.getStudentDOB());
		studentMaster.setFees(studentRequest.getFees());
		studentMaster.setRatings(studentRequest.getStudentRating());
		studentMaster.setStudentDOB(studentRequest.getStudentDOB());
		studentMaster.setStudentDOJ(studentRequest.getStudentDOJ());
		studentMaster.setStudentName(studentRequest.getStudentName());
		studentsDAOImpl.save(studentMaster);
		return "Details saved";
		}
		catch (Exception e)
		{
			return "Something went wrong. Details not saved please try again.";
		}
		
		
	}
public String getDetailsByIdSrvc(Integer id) {
	Optional<StudentMasterEntity> studenMaster =studentsDAOImpl.findById(id);
	StudentMasterEntity student=new StudentMasterEntity();
	if (studenMaster.isPresent())
	{
		
		student=studenMaster.get();
	
			/*
			 * master.setFees(student.getFees()); master.setRatings(student.getRatings());
			 * master.setStudentDOB(student.getStudentDOB());
			 * master.setStudentDOJ(student.getStudentDOJ());
			 * master.setStudentId(student.getStudentId());
			 * master.setStudentName(student.getStudentName());
			 * master.setStudentStandard(student.getStudentStandard());
			 */
	}
	
	Gson gson =new Gson ();
	
	
	return gson.toJson(student);
}
public String deleteDetailsById(Integer id) {
	// TODO Auto-generated method stub
	studentsDAOImpl.deleteById(id);
	ResponseBody reponse=new ResponseBody();
	
	
	return new Gson().toJson(reponse);
}
public String updateStudent(StudentRequest studentRequest) {
	// TODO Auto-generated method stub
	//studentsDAOImpl.
	return null;
}
}

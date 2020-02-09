package com.stub.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.stub.demo.masters.StudentMaster;
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
			List<StudentMaster> studentList = studentsDAOImpl.findAll();
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
		StudentMaster studentMaster=new StudentMaster();
		studentMaster.setStudentDOB(studentRequest.getStudentDOB());
		
		studentMaster.setStudentName(studentRequest.getStudentName());
		studentsDAOImpl.save(studentMaster);
		return "Details saved successfully";
		}
		catch (Exception e)
		{
			return "Something went wrong. Details not saved please try again.";
		}
		
		
	}
public String getDetailsByIdSrvc(Integer id) {
	Optional<StudentMaster> studenMaster =studentsDAOImpl.findById(id);
	Gson gson =new Gson ();
	StudenDetailResponse studentDetailResponse=new StudenDetailResponse();
	//studentDetailResponse.setStudentDOB(studenMaster.get(0));
	// TODO Auto-generated method stub
	return gson.toJson(studenMaster);
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

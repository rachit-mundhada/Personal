package com.stub.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.stub.demo.masters.StudentMaster;
import com.stub.demo.repository.StudentsDAOImpl;

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
}

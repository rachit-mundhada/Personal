package com.stub.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stub.demo.masters.StudentMaster;

public interface StudentsDAOImpl extends JpaRepository<StudentMaster, Integer>{
	
	

}

package com.stub.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stub.demo.masters.StudentMasterEntity;

public interface StudentsDAOImpl extends JpaRepository<StudentMasterEntity, Integer>{

}

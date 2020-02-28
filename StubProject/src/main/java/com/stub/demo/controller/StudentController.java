package com.stub.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stub.demo.request.StudentRequest;
import com.stub.demo.service.StudentMasterSrvc;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping(value = "students")
public class StudentController {

	@Autowired
	StudentMasterSrvc studentMasterSrvc;

	@GetMapping(value = "/getAllDetails")
	public String getAllDetails() {

		return studentMasterSrvc.getAllDetailsSrvc();
	}

	@GetMapping(value = "/getDetailsById/{id}")
	public String getDetailsById(@PathVariable Integer id) {

		return studentMasterSrvc.getDetailsByIdSrvc(id);
	}

	@PostMapping( value = "saveStudent")
	public ResponseEntity<StudentRequest> saveStudent(@Valid @RequestBody StudentRequest studentRequest) {
		String returnMessage=studentMasterSrvc.saveStudent(studentRequest);
		if (null != returnMessage && returnMessage.contains("successfully")) {
			return ResponseEntity.ok(studentRequest);
		}
		else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(studentRequest);
	
		 
	}

	@GetMapping(value = "/deleteDetailsById/{id}")
	public String deleteDetailsById(@PathVariable Integer id) {

		return studentMasterSrvc.deleteDetailsById(id);
	}

	@PutMapping(value = "updateStudent")
	public String updateStudent(@RequestBody StudentRequest studentRequest) {
		return studentMasterSrvc.updateStudent(studentRequest);
	}

}

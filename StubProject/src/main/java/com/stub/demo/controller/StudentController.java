package com.stub.demo.controller;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stub.demo.service.StudentMasterSrvc;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin
@RequestMapping(value = "students")
public class StudentController {

	
	@Autowired
	StudentMasterSrvc studentMasterSrvc;
	
	@GetMapping(value = "/getAllDetails")
	public String getAllDetails()
	{
		
		
		return studentMasterSrvc.getAllDetailsSrvc();
	}
}

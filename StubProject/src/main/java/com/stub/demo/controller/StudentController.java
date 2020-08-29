package com.stub.demo.controller;

import javax.print.DocFlavor.STRING;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.stub.demo.masters.StudentMasterLombok;
import com.stub.demo.request.StudentRequest;
import com.stub.demo.service.StudentMasterSrvc;
//import java.util.Objects.nonNull;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping(value = "students")
@Api(value = "StudentController", description = "REST APIs related to Student Entity!!!!")
public class StudentController {

	@Autowired
	StudentMasterSrvc studentMasterSrvc;

	@ApiOperation(value = "Get list of students in the system", response = String.class, produces = "application/json")
	@ApiResponses({ 
		@ApiResponse(message = "Successs", code = 200), 
		@ApiResponse(code = 401, message = "not authorized!"), 
        @ApiResponse(code = 403, message = "forbidden!!!"),
        @ApiResponse(code = 404, message = "not found!!!") 
		})
	@GetMapping(value = "/getAllDetails")
	public String getAllDetails() {

		return studentMasterSrvc.getAllDetailsSrvc();
	}

	@ApiOperation(value = "Get details by id", response = String.class, produces = "application/json")
	@ApiResponses({ 
		@ApiResponse(message = "Successs", code = 200), 
		@ApiResponse(code = 401, message = "not authorized!"), 
        @ApiResponse(code = 403, message = "forbidden!!!"),
        @ApiResponse(code = 404, message = "not found!!!") 
		})
	@GetMapping(value = "/getDetailsById/{id}")
	public String getDetailsById(@PathVariable Integer id) {

		return studentMasterSrvc.getDetailsByIdSrvc(id);
	}

	@ApiOperation(value = "Save student details", response = String.class, produces = "application/json")
	@ApiResponses({ 
		@ApiResponse(message = "Successs", code = 200), 
		@ApiResponse(code = 401, message = "not authorized!"), 
        @ApiResponse(code = 403, message = "forbidden!!!"),
        @ApiResponse(code = 404, message = "not found!!!") 
		})
	@PostMapping(value = "saveStudent")
	public ResponseEntity<StudentMasterLombok> saveStudent(@Valid @RequestBody StudentRequest studentRequest) {
		System.out.println("Input payload:-"+ studentRequest);
		StudentMasterLombok studentMasterLombok = studentMasterSrvc.saveStudent(studentRequest);
		if (studentMasterLombok!=null) {
			return ResponseEntity.ok(studentMasterLombok);
		} else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(studentMasterLombok);

	}

	

	
	@ApiOperation(value = "Delete student by id", response = String.class, produces = "application/json")
	@ApiResponses({ 
		@ApiResponse(message = "Successs", code = 200), 
		@ApiResponse(code = 401, message = "not authorized!"), 
        @ApiResponse(code = 403, message = "forbidden!!!"),
        @ApiResponse(code = 404, message = "not found!!!") 
		})
	@GetMapping(value = "/deleteDetailsById/{id}")
	public String deleteDetailsById(@PathVariable Integer id) {

		return studentMasterSrvc.deleteDetailsById(id);
	}

	@ApiOperation(value = "Upadate student", response = String.class)
	@ApiResponses({ 
		@ApiResponse(message = "Successs", code = 200), 
		@ApiResponse(code = 401, message = "not authorized!"), 
        @ApiResponse(code = 403, message = "forbidden!!!"),
        @ApiResponse(code = 404, message = "not found!!!") 
		})
	@PutMapping(value = "updateStudent/{id}")
	public String updateStudent(@PathVariable(value="id") Integer id, @RequestBody StudentRequest studentRequest ) {
		System.out.println("Paylod for the put method :-"+studentRequest.toString());
		return studentMasterSrvc.updateStudent(studentRequest,id);
	}

}

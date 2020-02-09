package com.stub.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.stub.demo.Hashing.JwtTokenUtil;
import com.stub.demo.masters.CityMasters;
import com.stub.demo.service.CityMastersSrvc;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin

public class DetailsFeedController {

	private static final Logger LOGGER = LoggerFactory.getLogger(DetailsFeedController.class);
	@Autowired
	CityMastersSrvc cityMasters;

	@GetMapping(value = "/getCityDetails", produces = "application/json")
	public String getCityDetails() {
		System.out.println("In the get city names controller class...");

		return cityMasters.getCityDetails();
	}

	@PostMapping(value = "/addCity", produces = "application/json")
	public String addCityDetails(@RequestBody String cityDetails) {
		LOGGER.info("In the add city names controller class...");

		return cityMasters.addCityDetails(cityDetails);
	}

	@PostMapping(value = "/findbyId", produces = "application/json")
	public String findCityId(@RequestBody CityMasters cityDetails) {
		LOGGER.info("Find by ID...");

		try {
			return cityMasters.findByIdCityDetails(cityDetails.getCityId());
		} catch (Exception e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
			return null;
		}

	}
}

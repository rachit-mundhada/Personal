package com.stub.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stub.demo.Hashing.JwtTokenUtil;
import com.stub.demo.masters.CityMasters;
import com.stub.demo.request.JwtRequest;
import com.stub.demo.responses.JwtResponse;
import com.stub.demo.service.CityMastersSrvc;
import com.stub.demo.service.JwtUserDetailsService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin

public class DetailsFeedController {

	// Implementing JWT token concept
	private static final Logger LOGGER = LoggerFactory.getLogger(DetailsFeedController.class);
	@Autowired
	CityMastersSrvc cityMasters;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}



	

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
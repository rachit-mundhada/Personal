package com.stub.demo.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.stub.demo.masters.CityMasters;
import com.stub.demo.masters.CityMastersEntity;
import com.stub.demo.repository.MastersDAOImpl;
import com.stub.demo.repository.MastersDAOJPAImpl;
import com.stub.demo.responses.ResponseBody;

import lombok.Builder;


@Service
public class CityMastersSrvc {

	@Autowired
	Gson gson;
	@Autowired
	MastersDAOImpl masterDao;

	
	@Autowired 
	ResponseBody responseBody;
	
	@Autowired
	CityMastersEntity cityMasters;
	
	@Autowired
	MastersDAOJPAImpl masterDaoJpa;
	
	public String getCityDetails ()
	{
		List<CityMastersEntity> cityList=masterDao.getCity();
		return new Gson().toJson(cityList );
		
		
	}

	public String addCityDetails(String cityDetails) {
		cityMasters=gson.fromJson(cityDetails, CityMastersEntity.class);
		// TODO Auto-generated method stub
		masterDao.addCityDetails(cityMasters);
		responseBody.setErrorCode("200");
		responseBody.setErrorMessage("City is saved ");
		 Gson gson=new Gson();
		
		return   gson.toJson(responseBody);
		
	}

	public String findByIdCityDetails(Integer cityid) throws Exception {
		// TODO Auto-generated method stub
		
		
		List<CityMasters> myList=masterDaoJpa.findByCityId(cityid);
		if (myList.size()==0) throw new Exception("Rachit this exception is created by you.");
		System.out.println(myList.stream().count());
		System.out.println("gson.toJson(myList):"+gson.toJson(myList));
		return gson.toJson(myList);
	}
}


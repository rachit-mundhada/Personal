package com.stub.demo.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stub.demo.masters.CityMasters;
import java.lang.Integer;

@Repository
public interface MastersDAOJPAImpl extends JpaRepository<CityMasters,Integer>{

	List<CityMasters> findByCityId(Integer cityid);
	
	@Override
	default List<CityMasters> findAll() {
		// TODO Auto-generated method stub
		
		return findAll();
	}
	
}

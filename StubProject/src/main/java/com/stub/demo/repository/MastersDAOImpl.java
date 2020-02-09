package com.stub.demo.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.stub.demo.masters.CityMastersEntity;

@Repository
public class MastersDAOImpl {

	
	private static final Logger log = LoggerFactory.getLogger(MastersDAOImpl.class);

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("deprecation")
	public List<CityMastersEntity> getCity() {
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		
		@SuppressWarnings("unchecked")
		List<CityMastersEntity> list = session.createCriteria(CityMastersEntity.class).list();
		log.info("Size of the list :-"+list.size());
		return list;
	}

	public void addCityDetails(CityMastersEntity cityMasters) {
		// TODO Auto-generated method stub
		 Session session = sessionFactory.getCurrentSession();
	        
		 session.save(cityMasters);
		 
	}
}

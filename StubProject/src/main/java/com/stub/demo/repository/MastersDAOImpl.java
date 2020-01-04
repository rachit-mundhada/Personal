package com.stub.demo.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.stub.demo.masters.CityMastersEntity;

@Repository
public class MastersDAOImpl {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("deprecation")
	public List<CityMastersEntity> getCity() {
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<CityMastersEntity> list = session.createCriteria(CityMastersEntity.class).list();
		System.out.println("Size of the list :-"+list.size());
		return list;
	}

	public void addCityDetails(CityMastersEntity cityMasters) {
		// TODO Auto-generated method stub
		 Session session = sessionFactory.getCurrentSession();
	        
		 session.save(cityMasters);
		 
	}
}

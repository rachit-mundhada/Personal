package com.stub.demo.service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class JwtUserDetailsService {

	public UserDetails loadUserByUsername(String username) {
		// TODO Auto-generated method stub
		
		if (username.equalsIgnoreCase("Rachit"))
		{
			return new User("Rachit", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6", new ArrayList<>());
		}
		else
			throw new UsernameNotFoundException("User not found");
	}

}

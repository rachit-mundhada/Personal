package com.stub.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication(exclude=HibernateJpaAutoConfiguration.class)
@ComponentScan(basePackages = "com.stub.demo.*")
@EnableJpaRepositories("com.stub.demo.*")
@EntityScan("com.stub.demo.*")
@EnableAspectJAutoProxy
@CrossOrigin(origins = "http://localhost:4200")
public class StubProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(StubProjectApplication.class, args);
	}

}

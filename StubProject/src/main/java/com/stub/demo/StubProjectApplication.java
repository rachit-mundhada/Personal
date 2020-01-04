package com.stub.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude=HibernateJpaAutoConfiguration.class)
@ComponentScan(basePackages = "com.stub.demo.*")
@EnableJpaRepositories("com.stub.demo.*")
@EntityScan("com.stub.demo.*")
@EnableAspectJAutoProxy
public class StubProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(StubProjectApplication.class, args);
	}

}

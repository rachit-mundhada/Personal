package com.stub.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(exclude=HibernateJpaAutoConfiguration.class)
@EnableSwagger2	
@ComponentScan(basePackages = "com.stub.demo.*")
@EnableJpaRepositories("com.stub.demo.*")
@EntityScan("com.stub.demo.*")
@EnableAspectJAutoProxy
@CrossOrigin(origins = "http://localhost:4200")
public class StubProjectApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(StubProjectApplication.class, args);
	}

	 @Bean
	   public Docket productApi() {
	      return new Docket(DocumentationType.SWAGGER_2).select()
	         .apis(RequestHandlerSelectors.basePackage("com.stub.demo")).build();
	   }
}

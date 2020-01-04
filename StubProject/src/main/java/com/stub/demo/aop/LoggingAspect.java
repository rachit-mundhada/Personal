package com.stub.demo.aop;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;


@Aspect
@Component
@EnableAspectJAutoProxy
public class LoggingAspect {


	private Logger logger =LoggerFactory.getLogger(this.getClass());
	@After("execution (* findCityId(..))")
	public void AfterExecution(JoinPoint jp)
	{
		
		System.out.println("I am talking from the Aspect class.");
		 logger.info(" Check for user access ");
	        
	}

	  @AfterThrowing ( pointcut = "execution (* com.stub.demo..*(..))", throwing ="e") 
	  public void afterThrowingMethod(Exception e) {
	  System.out.println("In the afterThrowingMethod");
	  logger.error(e.getMessage()); }
	
	 
	 @Around ( "execution (* findCityId(..))" )
	 public Object ExecutionAround(ProceedingJoinPoint pjp) throws Throwable {
	  logger.info("This is before around"); Object retVal = pjp.proceed();
	  System.out.println(retVal); 
	 return retVal;
	 
	 }
	 
	
}

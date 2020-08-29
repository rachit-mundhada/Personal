package com.stub.demo.Hashing;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter{

    private TokenAuthenticationService tokenAuthenticationService;

    public JWTLoginFilter(String url, AuthenticationManager authenticationManager)
    {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authenticationManager);
        tokenAuthenticationService = new TokenAuthenticationService();
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse)
            throws AuthenticationException, IOException, ServletException {
    	//System.out.println(httpServletRequest.getInputStream().readAllBytes());
    	ServletInputStream res=httpServletRequest.getInputStream();
       AccountCredentials credentials = new ObjectMapper().readValue(res,AccountCredentials.class);
    	
     System.out.println("In the password check:-"+ credentials.getPassword()+" and username:-"+ credentials.getUsername()+"  servlet req:-"+ httpServletRequest.getParameter("username"));
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword());
        return getAuthenticationManager().authenticate(token);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication)
            throws IOException, ServletException{
        String name = authentication.getName();
        tokenAuthenticationService.addAuthentication(response,name);
    }
}

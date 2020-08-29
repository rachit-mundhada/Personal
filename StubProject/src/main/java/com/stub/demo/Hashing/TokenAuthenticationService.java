package com.stub.demo.Hashing;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.ForbiddenException;

import java.util.Date;


public class TokenAuthenticationService {

    private long EXPIRATIONTIME = 1000 * 60 * 60 * 24 * 50; // 10 days
	
    private String secret = "ThisIsASecret";
    private String tokenPrefix = "Bearer";
    private String headerString = "Authorization";
    public void addAuthentication(HttpServletResponse response, String username)
    {
        // We generate a token now.
        String JWT = Jwts.builder()
                    .setSubject(username)
                    .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                    .signWith(SignatureAlgorithm.HS512, secret)
                    .compact();
        response.addHeader(headerString,tokenPrefix + " "+ JWT);
    }

    public Authentication getAuthentication(HttpServletRequest request) throws ForbiddenException
    {
    	try {
        String token = request.getHeader(headerString);
        if(token != null)
        {
            // parse the token.
            String username = Jwts.parser()
                        .setSigningKey(secret)
                        .parseClaimsJws(token)
                        .getBody()
                        .getSubject();
            if(username != null) // we managed to retrieve a user
            {
                return new AuthenticatedUser(username);
            }
        }
    	}
    	catch (MalformedJwtException e)
    	{
    		//throw new HttpRes
    		throw new BadRequestException();
    	}
    	catch (Exception e)
    	{
    		e.printStackTrace();
    		//throw new ForbiddenException("User not authorized.");
    		//throw new BadRequestException();
    	}
        return null;
    }
}

package com.stub.demo.Hashing;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// disable caching

		http.headers().cacheControl();

		http.csrf().disable().cors().and() // disable csrf for our requests.
				.authorizeRequests().antMatchers("/").permitAll()
				.antMatchers(HttpMethod.GET, "/login").permitAll()
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.antMatchers(HttpMethod.GET, "/**").permitAll()
				.antMatchers(HttpMethod.GET, "/**.js").permitAll()
				.antMatchers(HttpMethod.GET, "/fontawesome**").permitAll()
				.antMatchers(HttpMethod.GET, "/**.png").permitAll()
				.antMatchers(HttpMethod.GET, "/favicon.ico").permitAll()
				.antMatchers(HttpMethod.GET, "/login.jsp").permitAll()
				.antMatchers(HttpMethod.GET, "/index.html").permitAll()
				.antMatchers(HttpMethod.GET, "/swagger-ui.html").permitAll()
				.antMatchers(HttpMethod.GET, "/v2/api-docs").permitAll()
				.anyRequest().authenticated().and()

				// We filter the api/login requests
				.addFilterBefore(new JWTLoginFilter("/login", authenticationManager()),
						UsernamePasswordAuthenticationFilter.class)
				// And filter other requests to check the presence of JWT in header
				.addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class).headers()
				// the headers you want here. This solved all my CORS problems!
				//.addHeaderWriter(new StaticHeadersWriter("Access-Control-Allow-Origin", "*"))
				.addHeaderWriter(new StaticHeadersWriter("Access-Control-Allow-Methods", "POST, GET", "PUT", "OPTIONS"))
				.addHeaderWriter(new StaticHeadersWriter("Access-Control-Max-Age", "360000"))
				.addHeaderWriter(new StaticHeadersWriter("Access-Control-Allow-Credentials", "true"))
				.addHeaderWriter(new StaticHeadersWriter("Access-Control-Allow-Headers",
						"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"));

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Create a default account
		auth.inMemoryAuthentication().withUser("admin").password("{noop}password").roles("ADMIN");
	}

}

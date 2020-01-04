package com.stub.demo.responses;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Component
public class JwtResponse implements Serializable {
private static final long serialVersionUID = -8091879091924046844L;
private final String jwttoken;
public JwtResponse(String jwttoken) {
this.jwttoken = jwttoken;
}
public String getToken() {
return this.jwttoken;
}
}

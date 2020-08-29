package com.stub.demo.Hashing;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AccountCredentials {

	
    private String username;
    private String password;

    String getUsername() { return username; }
    String getPassword() { return password; }

    public void setUsername(String _username) { this.username = _username; }
    public void setPassword(String _password) { this.password = _password; }
}

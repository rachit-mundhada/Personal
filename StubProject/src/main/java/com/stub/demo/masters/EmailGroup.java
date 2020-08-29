package com.stub.demo.masters;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EmailGroup {

	private String email;
	private String confirmEmail;
	
	
}

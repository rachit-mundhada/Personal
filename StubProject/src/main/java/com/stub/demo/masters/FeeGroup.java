package com.stub.demo.masters;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Builder
@Getter
public class FeeGroup {

	private String fees;
	private String reFees;
	
}

package com.raffenio.crm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrmApplication {

	public static void main(String[] args) {
		System.out.println("starting");

		SpringApplication.run(CrmApplication.class, args);
		System.out.println("started");
	}

}

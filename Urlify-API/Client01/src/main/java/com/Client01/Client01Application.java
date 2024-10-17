package com.Client01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class Client01Application {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(Client01Application.class, args);

		System.out.println("\n\n\nAccenture Backend is fine...\n\n\n");

	}

}
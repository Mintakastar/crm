package com.raffenio.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.rest.core.event.ExceptionEvent;
import org.springframework.stereotype.Component;

/**
 * This loader class will fill some data into the Database for demos purposes
 */
@Component
public class DemoLoader implements CommandLineRunner {
    private final ContactRepository repository;

    @Autowired
    public DemoLoader( ContactRepository repository){
        this.repository= repository;
    }
    @Override
    public void run (String... strings) throws Exception{
        this.repository.save(new Contact("Rafael","Lopez","me@me.com"));
    }
}

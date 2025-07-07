package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean
        BookService service = (BookService) context.getBean("bookService");

        // Test DI
        service.showBooks();

        ((ClassPathXmlApplicationContext) context).close();
    }
}

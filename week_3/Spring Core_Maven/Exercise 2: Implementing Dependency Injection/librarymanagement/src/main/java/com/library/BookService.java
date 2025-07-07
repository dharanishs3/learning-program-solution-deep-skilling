package com.library;

public class BookService {

    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBooks() {
        System.out.println("BookService: Calling repository...");
        bookRepository.displayBooks();
    }
}

package world.grendel.bookclub.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.bookclub.models.Book;
import world.grendel.bookclub.repositories.BookRepository;

/**
 * BookService
 */
@Service
public class BookService {
    private final BookRepository bookRepository;

	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
    }

    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    public Book getById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public List<Book> getByUserId(Long userId) {
        return bookRepository.findAllByUserId(userId);
    }

    public List<Book> getByAuthor(String author) {
        return bookRepository.findAllByAuthor(author);
    }

    public Book create(Book newBook) {
        return bookRepository.save(newBook);
    }

    public Book update(Book book) {
        return bookRepository.save(book);
    }

    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }
}

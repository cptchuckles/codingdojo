package world.grendel.books.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import world.grendel.books.models.Book;
import world.grendel.books.services.BookService;

/**
 * Books
 */
@RestController
@RequestMapping("/api/books")
public class BooksApiController {
    private final BookService bookService;

    public BooksApiController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("")
    public List<Book> index() {
        return bookService.allBooks();
    }

    @PostMapping("")
    public Book create(
            @RequestParam(value="title") String title,
            @RequestParam(value="language") String language,
            @RequestParam(value="description") String description,
            @RequestParam(value="pageCount") Integer pageCount
    ) {
        Book b = new Book(title, language, description, pageCount);
        return bookService.createBook(b);
    }

    @GetMapping("/{id}")
    public Book show(@PathVariable("id") Long id) {
        return bookService.findBook(id);
    }

    @PutMapping("/{id}")
    public Book update(@PathVariable("id") Long id,
            @RequestParam(value="title") String title,
            @RequestParam(value="description") String description,
            @RequestParam(value="pageCount") Integer pageCount
    ) {
        Book bookToUpdate = bookService.findBook(id);
        if (bookToUpdate == null) {
            return null;
        }
        bookToUpdate.setTitle(title);
        bookToUpdate.setDescription(description);
        bookToUpdate.setPageCount(pageCount);
        return bookService.updateBook(bookToUpdate);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}

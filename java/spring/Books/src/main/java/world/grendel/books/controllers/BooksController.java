package world.grendel.books.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import world.grendel.books.models.Book;
import world.grendel.books.services.BookService;

/**
 * BooksController
 */
@Controller
@RequestMapping("/books")
public class BooksController {
    private final BookService bookService;

    public BooksController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("")
    public String index() {
        return "booksIndex.jsp";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable("id") Long id,
            Model model
    ) {
        Book shownBook = bookService.findBook(id);
        model.addAttribute("shownBook", shownBook);
        return "bookShow.jsp";
    }
}

package world.grendel.books.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.validation.Valid;
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
    public String index(Model model) {
        model.addAttribute("allBooks", bookService.allBooks());
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

    @GetMapping("/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "newBook.jsp";
    }

    @PostMapping("")
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "newBook.jsp";
        }
        bookService.createBook(book);
        return "redirect:/books";
    }
}

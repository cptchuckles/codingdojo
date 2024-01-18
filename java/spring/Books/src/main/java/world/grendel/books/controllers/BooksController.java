package world.grendel.books.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * BooksController
 */
@Controller
@RequestMapping("/books")
public class BooksController {
    @GetMapping("")
    public String index() {
        return "booksIndex.jsp";
    }
}

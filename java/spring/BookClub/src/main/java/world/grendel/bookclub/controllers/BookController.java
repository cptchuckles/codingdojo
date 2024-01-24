package world.grendel.bookclub.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import world.grendel.bookclub.services.BookService;
import world.grendel.bookclub.services.UserService;

/**
 * BookController
 */
@Controller
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;
	private final UserService userService;

    public BookController(BookService bookService, UserService userService) {
        this.bookService = bookService;
		this.userService = userService;
    }

    @GetMapping("")
    public String index(HttpSession session, Model model) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        model.addAttribute("allBooks", bookService.getAll());
        return "bookIndex.jsp";
    }
}

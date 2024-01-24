package world.grendel.bookclub.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import world.grendel.bookclub.models.Book;
import world.grendel.bookclub.models.User;
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

    @GetMapping("/new")
    public String index(
        HttpSession session,
        Model model,
        @ModelAttribute("newBook") Book newBook
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        return "bookForm.jsp";
    }

    @PostMapping("")
    public String create(
        HttpSession session, Model model,
        @Valid @ModelAttribute("newBook") Book newBook, BindingResult result
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }

        if (result.hasErrors()) {
            model.addAttribute("newBook", newBook);
            return "bookForm.jsp";
        }

        newBook.setUser((User) model.getAttribute("currentUser"));
        bookService.create(newBook);
        return "redirect:/books";
    }
}

package world.grendel.bookclub.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/{id}")
    public String show(
        HttpSession session, Model model,
        @PathVariable("id") Long id
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        Book book = bookService.getById(id);
        if (book == null) {
            return "redirect:/books";
        }
        model.addAttribute("book", book);
        return "bookShow.jsp";
    }

    @DeleteMapping("/{id}")
    public String delete(
        HttpSession session, Model model,
        @PathVariable("id") Long id
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        Book book = bookService.getById(id);
        User currentUser = (User) model.getAttribute("currentUser");
        if (book.getUser().getId() != currentUser.getId()) {
            return "redirect:/books";
        }
        bookService.deleteById(id);
        return "redirect:/books";
    }

    @GetMapping("/{id}/edit")
    public String edit(
        HttpSession session, Model model,
        @PathVariable("id") Long id
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        Book book = bookService.getById(id);
        User currentUser = (User) model.getAttribute("currentUser");
        if (book.getUser().getId() != currentUser.getId()) {
            return "redirect:/books";
        }
        model.addAttribute("book", book);
        return "bookEdit.jsp";
    }

    @PutMapping("/{id}")
    public String update(
        HttpSession session, Model model,
        @Valid @ModelAttribute("book") Book editedBook, BindingResult result
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }

        User currentUser = (User) model.getAttribute("currentUser");
        Book originalBook = bookService.getById(editedBook.getId());
        if (originalBook.getUser().getId() != currentUser.getId()) {
            return "redirect:/books";
        }
        editedBook.setUser(originalBook.getUser());

        if (result.hasErrors()) {
            model.addAttribute("book", editedBook);
            model.addAttribute("currentUser", currentUser);
            return "bookEdit.jsp";
        }

        bookService.update(editedBook);
        return "redirect:/books";
    }
}

package world.grendel.userlogindemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.webjars.NotFoundException;

import jakarta.servlet.http.HttpSession;
import world.grendel.userlogindemo.annotation.AuthenticatedRoute;
import world.grendel.userlogindemo.models.User;
import world.grendel.userlogindemo.services.UserService;

/**
 * UserController
 */
@Controller
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
    }

    protected void identifyCurrentUser(HttpSession session, Model model) throws NotFoundException {
        Long userId = (Long) session.getAttribute("currentUser");
        if (userId == null) {
            throw new NotFoundException("User not found");
        }
        User currentUser = userService.getById(userId);
        if (currentUser == null) {
            throw new NotFoundException("User ID is not valid");
        }
        model.addAttribute("currentUser", currentUser);
    }

    @GetMapping("")
    @AuthenticatedRoute
    public String index(HttpSession session, Model model) {
        // try {
        //     identifyCurrentUser(session, model);
        // }
        // catch (NotFoundException e) {
        //     return "redirect:/logout";
        // }
        model.addAttribute("allUsers", userService.getAll());
        return "userIndex.jsp";
    }
}

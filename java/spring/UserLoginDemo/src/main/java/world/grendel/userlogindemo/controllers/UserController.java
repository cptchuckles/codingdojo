package world.grendel.userlogindemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @GetMapping("")
    // @AuthenticatedRoute
    public String index(HttpSession session, Model model) {
        try {
            User currentUser = userService.identifyCurrentUser(session);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        model.addAttribute("allUsers", userService.getAll());
        return "userIndex.jsp";
    }
}

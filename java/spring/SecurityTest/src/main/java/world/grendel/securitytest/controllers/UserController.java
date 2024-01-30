package world.grendel.securitytest.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import world.grendel.securitytest.models.User;
import world.grendel.securitytest.services.UserService;

/**
 * UserController
 */
@Controller
public class UserController {
    private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
    }

    @RequestMapping("/register")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }

    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }

    @PostMapping("/register")
    public String registration(
        @Valid @ModelAttribute("user") User user, BindingResult result,
        Model model, HttpSession session
    ) {
        if (result.hasErrors()) {
            return "registrationPage.jsp";
        }
        userService.saveWithUserRole(user);
        return "redirect:/login";
    }
}

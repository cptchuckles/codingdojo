package world.grendel.userlogindemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import jakarta.servlet.http.HttpSession;
import world.grendel.userlogindemo.annotation.AuthenticatedRoute;
import world.grendel.userlogindemo.dataobjects.UserLoginDTO;
import world.grendel.userlogindemo.dataobjects.UserRegisterDTO;
import world.grendel.userlogindemo.services.UserService;

/**
 * UserController
 */
@Controller
public class UserController {
    private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
    }

    @GetMapping("/login")
    public String login(
        @ModelAttribute("userLogin") UserLoginDTO userLogin, 
        @ModelAttribute("userRegister") UserRegisterDTO userRegister
    ) {
        return "loginForm.jsp";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }

    @GetMapping("/users")
    @AuthenticatedRoute
    public String index(HttpSession session, Model model) {
        model.addAttribute("allUsers", userService.getAll());
        return "userIndex.jsp";
    }
}

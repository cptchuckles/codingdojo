package world.grendel.userlogindemo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.webjars.NotFoundException;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import world.grendel.userlogindemo.dataobjects.UserLoginDTO;
import world.grendel.userlogindemo.dataobjects.UserRegisterDTO;
import world.grendel.userlogindemo.models.User;
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

    private void identifyCurrentUser(HttpSession session, Model model) throws NotFoundException {
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

    @GetMapping("/users")
    public String index(HttpSession session, Model model) {
        try {
            identifyCurrentUser(session, model);
        }
        catch (NotFoundException e) {
            return "redirect:/logout";
        }
        model.addAttribute("allUsers", userService.getAll());
        return "userIndex.jsp";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "logout.jsp";
    }

    @GetMapping("/login")
    public String loginForm(
        @ModelAttribute("userLogin") UserLoginDTO userLogin,
        @ModelAttribute("userRegister") UserRegisterDTO userRegister
    ) {
        return "userForm.jsp";
    }

    @PostMapping("/login")
    public String authenticate(
        @Valid @ModelAttribute("userLogin") UserLoginDTO userLogin,
        BindingResult result,
        HttpSession session,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("userLogin", userLogin);
            model.addAttribute("userRegister", new UserRegisterDTO());
            return "userForm.jsp";
        }
        return "redirect:/dashboard";
    }

    @PostMapping("/register")
    public String register(
        @Valid @ModelAttribute("userRegister") UserRegisterDTO userRegister,
        BindingResult result,
        HttpSession session,
        Model model
    ) {
        User newUser = userService.register(userRegister, result);
        if (result.hasErrors()) {
            model.addAttribute("userRegister", userRegister);
            model.addAttribute("userLogin", new UserLoginDTO());
            return "userForm.jsp";
        }
        session.setAttribute("currentUser", newUser.getId());
        return "redirect:/dashboard";
    }
}

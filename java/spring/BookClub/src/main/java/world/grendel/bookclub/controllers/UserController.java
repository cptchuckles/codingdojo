package world.grendel.bookclub.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import world.grendel.bookclub.dataobjects.UserLoginDTO;
import world.grendel.bookclub.dataobjects.UserRegisterDTO;
import world.grendel.bookclub.models.User;
import world.grendel.bookclub.services.UserService;

/**
 * UserController
 */
@Controller
public class UserController {
    private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
    }

    @GetMapping("/users")
    public String index(HttpSession session, Model model) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }
        model.addAttribute("allUsers", userService.getAll());
        return "userIndex.jsp";
    }

    @GetMapping("/dashboard")
    public String dashboard(HttpSession session, Model model) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/logout";
        }

        return "dashboard.jsp";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String loginForm(
        HttpSession session,
        @ModelAttribute("userLogin") UserLoginDTO userLogin,
        @ModelAttribute("userRegister") UserRegisterDTO userRegister
    ) {
        if (session.getAttribute("currentUser") != null) {
            return "redirect:/dashboard";
        }
        return "userForm.jsp";
    }

    @PostMapping("/login")
    public String authenticate(
        @Valid @ModelAttribute("userLogin") UserLoginDTO userLogin,
        BindingResult result,
        HttpSession session,
        Model model
    ) {
        User user = userService.login(userLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("userLogin", userLogin);
            model.addAttribute("userRegister", new UserRegisterDTO());
            return "userForm.jsp";
        }
        session.setAttribute("currentUser", user.getId());
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

    @DeleteMapping("/users/{id}")
    public String deleteById(
        @PathVariable("id") Long id,
        HttpSession session,
        Model model
    ) {
        try {
            userService.getCurrentUser(session, model);
        }
        catch (Exception e) {
            return "redirect:/users";
        }
        User currentUser = (User) model.getAttribute("currentUser");
        User removeUser = userService.getById(id);
        if (removeUser == null || currentUser.getId() != removeUser.getId()) {
            return "redirect:/users";
        }
        userService.deleteById(id);
        return "redirect:/users";
    }
}

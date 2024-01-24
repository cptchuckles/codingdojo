package world.grendel.bookclub.services;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import jakarta.servlet.http.HttpSession;
import world.grendel.bookclub.dataobjects.UserLoginDTO;
import world.grendel.bookclub.dataobjects.UserRegisterDTO;
import world.grendel.bookclub.models.User;
import world.grendel.bookclub.repositories.UserRepository;

/**
 * UserService
 */
@Service
public class UserService {
    private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
    }

    public void getCurrentUser(HttpSession session, Model model) throws Exception {
        Long userId = (Long) session.getAttribute("currentUser");
        if (userId == null) {
            throw new Exception("Client is not authenticated");
        }
        User currentUser = userRepository.findById(userId).orElse(null);
        if (currentUser == null) {
            throw new Exception("User ID is not valid");
        }
        model.addAttribute("currentUser", currentUser);
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public User getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User create(User whomstdve) {
        return userRepository.save(whomstdve);
    }

    public User register(UserRegisterDTO userRegister, BindingResult result) {
        if (!userRegister.passwordIsConfirmed()) {
            result.rejectValue("confirmPassword", "Matches", "Password confirmation does not match!");
        }
        if (userRepository.findByEmail(userRegister.getEmail()).isPresent()) {
            result.rejectValue("email", "Exists", "User with this email address already exists!");
        }
        if (result.hasErrors()) {
            return null;
        }
        User newUser = new User();
        newUser.setUsername(userRegister.getUsername());
        newUser.setEmail(userRegister.getEmail());
        newUser.setPasswordHash(BCrypt.hashpw(userRegister.getPassword(), BCrypt.gensalt()));
        return userRepository.save(newUser);
    }

    public User login(UserLoginDTO userLogin, BindingResult result) {
        User user = userRepository.findByEmail(userLogin.getEmail()).orElse(null);
        if (result.hasErrors()) {
            return null;
        }
        if (user == null) {
            result.rejectValue("email", "Login", "User credentials are invalid");
            return null;
        }
        if (! BCrypt.checkpw(userLogin.getPassword(), user.getPasswordHash())) {
            result.rejectValue("password", "Login", "User credentials are invalid");
            return null;
        }
        return user;
    }

    public User update(User whomstdve) {
        return userRepository.save(whomstdve);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}

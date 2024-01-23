package world.grendel.userlogindemo.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

import world.grendel.userlogindemo.dataobjects.UserRegisterDTO;
import world.grendel.userlogindemo.models.User;
import world.grendel.userlogindemo.repositories.UserRepository;

/**
 * UserService
 */
@Service
public class UserService {
    private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
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
        return userRepository.save(newUser);
    }

    public User update(User whomstdve) {
        return userRepository.save(whomstdve);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}

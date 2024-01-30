package world.grendel.userlogindemo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;
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

    public User identifyCurrentUser(HttpSession session) throws Exception {
        Long userId = (Long) session.getAttribute("currentUser");
        if (userId == null) {
            throw new Exception("User not found");
        }
        User currentUser = getById(userId);
        if (currentUser == null) {
            throw new Exception("User ID is not valid");
        }
        return currentUser;
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
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

    public User update(User whomstdve) {
        return userRepository.save(whomstdve);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}

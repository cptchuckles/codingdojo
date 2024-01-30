package world.grendel.securitytest.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import world.grendel.securitytest.models.User;
import world.grendel.securitytest.repositories.RoleRepository;
import world.grendel.securitytest.repositories.UserRepository;

/**
 * UserService
 */
@Service
public class UserService {
    private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	public UserService(
        UserRepository userRepository,
        RoleRepository roleRepository,
        BCryptPasswordEncoder bCryptPasswordEncoder
    ) {
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void saveWithUserRole(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles(roleRepository.findByName("ROLE_USER"));
        userRepository.save(user);
    }

    public void saveUserWithAdminRole(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles(roleRepository.findByName("ROLE_ADMIN"));
        userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}

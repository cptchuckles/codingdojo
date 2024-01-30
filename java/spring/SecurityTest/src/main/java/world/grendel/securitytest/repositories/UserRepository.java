package world.grendel.securitytest.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.securitytest.models.User;

/**
 * UserRepository
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}

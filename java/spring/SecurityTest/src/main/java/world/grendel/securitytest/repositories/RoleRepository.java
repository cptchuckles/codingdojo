package world.grendel.securitytest.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.securitytest.models.Role;

/**
 * RoleRepository
 */
@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    public List<Role> findAll();
    public List<Role> findByName(String name);
}

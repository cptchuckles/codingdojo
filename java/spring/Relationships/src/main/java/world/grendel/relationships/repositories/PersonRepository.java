package world.grendel.relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.relationships.models.Person;

/**
 * PerosonRepository
 */
@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {
    public List<Person> findAll();
}

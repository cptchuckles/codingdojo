package world.grendel.relationships.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.relationships.models.Person;
import world.grendel.relationships.repositories.PersonRepository;

/**
 * PersonService
 */
@Service
public class PersonService {
    private final PersonRepository personRepository;

	public PersonService(PersonRepository personRepository) {
		this.personRepository = personRepository;
    }

    public Person create(Person newPerson) {
        return personRepository.save(newPerson);
    }

    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Person getById(Long id) {
        return personRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        personRepository.deleteById(id);
    }
}

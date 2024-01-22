package world.grendel.dojosandninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.dojosandninjas.models.Dojo;

/**
 * DojoRepository
 */
@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long> {
    public List<Dojo> findAll();
}

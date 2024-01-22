package world.grendel.dojosandninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.dojosandninjas.models.Ninja;

/**
 * NinjaRepository
 */
@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
    public List<Ninja> findAll();
}

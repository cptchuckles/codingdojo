package world.grendel.burgertracker.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.burgertracker.models.Burger;

/**
 * BurgerRepository
 */
@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long> {
    public List<Burger> findAll();
}

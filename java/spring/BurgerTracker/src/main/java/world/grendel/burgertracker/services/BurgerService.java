package world.grendel.burgertracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.burgertracker.models.Burger;
import world.grendel.burgertracker.repositories.BurgerRepository;

/**
 * BurgerService
 */
@Service
public class BurgerService {
    private final BurgerRepository burgerRepository;

	public BurgerService(BurgerRepository burgerRepository) {
		this.burgerRepository = burgerRepository;
    }

    public List<Burger> allBurgers() {
        return burgerRepository.findAll();
    }

    public Burger getBurger(Long id) {
        return burgerRepository.findById(id).orElse(null);
    }

    public void createBurger(Burger newBurger) {
        burgerRepository.save(newBurger);
    }

    public void updateBurger(Burger burger) {
        burgerRepository.save(burger);
    }
}

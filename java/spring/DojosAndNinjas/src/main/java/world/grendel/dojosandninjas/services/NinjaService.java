package world.grendel.dojosandninjas.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.dojosandninjas.models.Ninja;
import world.grendel.dojosandninjas.repositories.NinjaRepository;

/**
 * NinjaService
 */
@Service
public class NinjaService {
    private final NinjaRepository ninjaRepository;

	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
    }

    public Ninja create(Ninja newNinja) {
        return ninjaRepository.save(newNinja);
    }

    public List<Ninja> getAll() {
        return ninjaRepository.findAll();
    }

    public Ninja findById(Long id) {
        return ninjaRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        ninjaRepository.deleteById(id);
    }
}

package world.grendel.dojosandninjas.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.dojosandninjas.models.Dojo;
import world.grendel.dojosandninjas.repositories.DojoRepository;

/**
 * DojoService
 */
@Service
public class DojoService {
    private final DojoRepository dojoRepository;

	public DojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
    }

    public Dojo create(Dojo newDojo) {
        return dojoRepository.save(newDojo);
    }

    public List<Dojo> getAll() {
        return dojoRepository.findAll();
    }

    public Dojo findById(Long id) {
        return dojoRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        dojoRepository.deleteById(id);
    }
}

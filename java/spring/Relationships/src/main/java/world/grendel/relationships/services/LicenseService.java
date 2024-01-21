package world.grendel.relationships.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.relationships.models.License;
import world.grendel.relationships.repositories.LicenseRepository;

/**
 * LicenseService
 */
@Service
public class LicenseService {
    private final LicenseRepository licenseRepository;

	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
    }

    public License create(License newLicense) {
        return licenseRepository.save(newLicense);
    }

    public List<License> getAll() {
        return licenseRepository.findAll();
    }

    public License getById(Long id) {
        return licenseRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        licenseRepository.deleteById(id);
    }
}

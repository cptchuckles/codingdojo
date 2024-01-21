package world.grendel.relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.relationships.models.License;

/**
 * LicenseRepository
 */
@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {
    public List<License> findAll();
}

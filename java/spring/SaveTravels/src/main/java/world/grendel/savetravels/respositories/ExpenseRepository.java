package world.grendel.savetravels.respositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import world.grendel.savetravels.models.Expense;

/**
 * ExpenseRepository
 */
@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
    public List<Expense> findAll();
}

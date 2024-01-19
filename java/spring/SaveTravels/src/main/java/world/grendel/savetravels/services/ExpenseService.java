package world.grendel.savetravels.services;

import java.util.List;

import org.springframework.stereotype.Service;

import world.grendel.savetravels.models.Expense;
import world.grendel.savetravels.respositories.ExpenseRepository;

/**
 * ExpenseService
 */
@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
    }

    public List<Expense> getAll() {
        return expenseRepository.findAll();
    }

    public Expense getById(Long id) {
        return expenseRepository.findById(id).orElse(null);
    }

    public Expense create(Expense newExpense) {
        return expenseRepository.save(newExpense);
    }

    public Expense update(Expense expense) {
        return expenseRepository.save(expense);
    }

    public void delete(Long id) {
        expenseRepository.deleteById(id);
    }
}

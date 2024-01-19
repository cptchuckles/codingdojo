package world.grendel.savetravels.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.validation.Valid;
import world.grendel.savetravels.models.Expense;
import world.grendel.savetravels.services.ExpenseService;

/**
 * ExpenseController
 */
@Controller
@RequestMapping("/expenses")
public class ExpenseController {
    private final ExpenseService expenseService;

	public ExpenseController(ExpenseService expenseService) {
		this.expenseService = expenseService;
    }

    // create
    @PostMapping("")
    public String create(
        @Valid @ModelAttribute("newExpense") Expense newExpense, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("allExpenses", expenseService.getAll());
            return "expensesIndex.jsp";
        }
        expenseService.create(newExpense);
        return "redirect:/expenses";
    }

    // read
    @GetMapping("")
    public String index(@ModelAttribute("newExpense") Expense newExpense, Model model) {
        model.addAttribute("allExpenses", expenseService.getAll());
        return "expensesIndex.jsp";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Expense expense = expenseService.getById(id);
        if (expense == null) {
            return "redirect:/expenses";
        }
        model.addAttribute("expense", expense);
        return "expenseShow.jsp";
    }

    // update
    @GetMapping("/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Expense expense = expenseService.getById(id);
        if (expense == null) {
            return "redirect:/expenses";
        }
        model.addAttribute("expense", expense);
        return "expenseEdit.jsp";
    }

    @PutMapping("/{id}")
    public String update(
        @Valid @ModelAttribute("expense") Expense expense, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("expense", expense);
            return "expenseEdit.jsp";
        }
        expenseService.update(expense);
        return "redirect:/expenses";
    }

    // destroy
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        expenseService.delete(id);
        return "redirect:/expenses";
    }
}

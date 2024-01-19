package world.grendel.burgertracker.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.validation.Valid;
import world.grendel.burgertracker.models.Burger;
import world.grendel.burgertracker.services.BurgerService;

/**
 * BurgerController
 */
@Controller
@RequestMapping("/burgers")
public class BurgerController {
    private final BurgerService burgerService;

	public BurgerController(BurgerService burgerService) {
		this.burgerService = burgerService;
    }

    @GetMapping("")
    public String index(@ModelAttribute("newBurger") Burger newBurger, Model model) {
        List<Burger> allBurgers = burgerService.allBurgers();
        model.addAttribute("allBurgers", allBurgers);
        return "listBurgers.jsp";
    }
    }

    @PostMapping("")
    public String create(
        @Valid @ModelAttribute("newBurger") Burger newBurger, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            List<Burger> allBurgers = burgerService.allBurgers();
            model.addAttribute("allBurgers", allBurgers);
            return "listBurgers.jsp";
        }
        burgerService.createBurger(newBurger);
        return "redirect:/burgers";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Burger burger = burgerService.getBurger(id);
        if (burger == null) {
            return "redirect:/burgers";
        }
        model.addAttribute("burger", burger);
        return "editBurger.jsp";
    }

    @PutMapping("/{id}")
    public String update(
        @Valid @ModelAttribute("burger") Burger burger, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("burger", burger);
            return "editBurger.jsp";
        }
        burgerService.updateBurger(burger);
        return "redirect:/burgers";
    }
}

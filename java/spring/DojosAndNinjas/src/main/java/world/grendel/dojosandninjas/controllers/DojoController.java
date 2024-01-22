package world.grendel.dojosandninjas.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.validation.Valid;
import world.grendel.dojosandninjas.models.Dojo;
import world.grendel.dojosandninjas.services.DojoService;

/**
 * DojoController
 */
@Controller
@RequestMapping("/dojos")
public class DojoController {
    private final DojoService dojoService;

	public DojoController(
        DojoService dojoService
    ) {
		this.dojoService = dojoService;
    }

    @GetMapping("")
    public String index(@ModelAttribute("newDojo") Dojo newDojo, Model model) {
        model.addAttribute("allDojos", dojoService.getAll());
        return "dojoIndex.jsp";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Dojo dojo = dojoService.findById(id);
        if (dojo == null) {
            return "redirect:/dojos";
        }
        model.addAttribute("dojo", dojo);
        return "dojoShow.jsp";
    }

    @PostMapping("")
    public String create(
        @Valid @ModelAttribute("newDojo") Dojo newDojo, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("newDojo", newDojo);
            model.addAttribute("allDojos", dojoService.getAll());
            return "dojoIndex.jsp";
        }
        dojoService.create(newDojo);
        return "redirect:/dojos";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        dojoService.delete(id);
        return "redirect:/dojos";
    }
}

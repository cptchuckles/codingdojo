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
import world.grendel.dojosandninjas.models.Ninja;
import world.grendel.dojosandninjas.services.DojoService;
import world.grendel.dojosandninjas.services.NinjaService;

/**
 * NinjaController
 */
@Controller
@RequestMapping("/ninjas")
public class NinjaController {
	private final DojoService dojoService;
	private final NinjaService ninjaService;


    public NinjaController(NinjaService ninjaService, DojoService dojoService) {
		this.ninjaService = ninjaService;
		this.dojoService = dojoService;
    }

    @GetMapping("/new")
    public String ninjaForm(@ModelAttribute("newNinja") Ninja newNinja, Model model) {
        model.addAttribute("allDojos", dojoService.getAll());
        return "ninjaForm.jsp";
    }

    @PostMapping("")
    public String create(
        @Valid @ModelAttribute("newNinja") Ninja newNinja, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("newNinja", newNinja);
            model.addAttribute("allDojos", dojoService.getAll());
            return "ninjaForm.jsp";
        }
        ninjaService.create(newNinja);
        return "redirect:/dojos/" + newNinja.getDojo().getId().toString();
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        Ninja ninja = ninjaService.findById(id);
        if (ninja == null) {
            return "redirect:/dojos";
        }
        ninjaService.delete(id);
        return "redirect:/dojos/" + ninja.getDojo().getId().toString();
    }
}

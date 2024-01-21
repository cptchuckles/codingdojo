package world.grendel.relationships.controllers;

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
import world.grendel.relationships.models.License;
import world.grendel.relationships.services.LicenseService;
import world.grendel.relationships.services.PersonService;

/**
 * LicenseController
 */
@Controller
@RequestMapping("/licenses")
public class LicenseController {
    private final LicenseService licenseService;
	private final PersonService personService;

    public LicenseController(
        LicenseService licenseService,
        PersonService personService
    ) {
        this.licenseService = licenseService;
		this.personService = personService;
    }

    @GetMapping("/new")
    public String licenseForm(
        @ModelAttribute("newLicense") License newLicense,
        Model model
    ) {
        model.addAttribute("allPersons", personService.getAll());
        return "licenseForm.jsp";
    }

    @PostMapping("")
    public String create(
        @Valid @ModelAttribute("newLicense") License newLicense, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("newLicense", newLicense);
            model.addAttribute("allPersons", personService.getAll());
            return "licenseForm.jsp";
        }
        licenseService.create(newLicense);
        return "redirect:/persons";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        licenseService.delete(id);
        return "redirect:/persons";
    }
}

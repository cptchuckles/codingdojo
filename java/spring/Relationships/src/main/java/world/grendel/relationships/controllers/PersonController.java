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
import world.grendel.relationships.models.Person;
import world.grendel.relationships.services.PersonService;

/**
 * PersonController
 */
@Controller
@RequestMapping("/persons")
public class PersonController {
    private PersonService personService;

	public PersonController(PersonService personService) {
		this.personService = personService;
    }

    @GetMapping("")
    public String index(Model model) {
        model.addAttribute("allPersons", personService.getAll());
        return "personIndex.jsp";
    }

    @GetMapping("/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Person person = personService.getById(id);
        if (person == null) {
            return "redirect:/persons";
        }
        model.addAttribute("person", person);
        return "personShow.jsp";
    }

    @GetMapping("/new")
    public String newForm(@ModelAttribute("newPerson") Person newPerson) {
        return "personForm.jsp";
    }

    @PostMapping("")
    public String create(
        @Valid @ModelAttribute("newPerson") Person newPerson, BindingResult result,
        Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("newPerson", newPerson);
            return "personForm.jsp";
        }
        personService.create(newPerson);
        return "redirect:/persons";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        personService.delete(id);
        return "redirect:/persons";
    }
}

package world.grendel.fruityloops.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import world.grendel.fruityloops.models.Item;

/**
 * ItemController
 */
@Controller
public class ItemController {
    @RequestMapping("/")
    public String index(Model model) {
        var fruits = new ArrayList<Item>();
        fruits.add(new Item("Kiwi", 1.50));
        fruits.add(new Item("Mango", 2.00));
        fruits.add(new Item("Goji Berries", 4.00));
        fruits.add(new Item("Guava", 0.75));
        fruits.add(new Item("Peanuts", 0.01));
        fruits.add(new Item("Wagyu", 100.00));

        model.addAttribute("fruits", fruits);

        return "index.jsp";
    }
}

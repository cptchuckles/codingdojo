package world.grendel.hoppersreceipts.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * MainController
 */
@Controller
public class MainController {
	@RequestMapping("/")
	public String index(Model model) {
		String name = "Mr. President";
		String itemName = "Strongest Bomb";
		double price = 9000.99;
		String description = "This bomb is too strong!";
		String vendor = "Bomb Seller";

		model.addAttribute("customerName", name);
		model.addAttribute("itemName", itemName);
		model.addAttribute("itemPrice", price);
		model.addAttribute("itemDescription", description);
		model.addAttribute("itemVendor", vendor);

		return "index.jsp";
	}
}

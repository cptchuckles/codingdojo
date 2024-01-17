package world.grendel.omikujiform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

/**
 * OmikujiController
 */
@Controller
@RequestMapping("/omikuji")
public class OmikujiController {
    @GetMapping("")
    public String form() {
        return "form.jsp";
    }

    @PostMapping("")
    public String submit(HttpSession session,
        @RequestParam(value="number") Integer number,
        @RequestParam(value="city") String city,
        @RequestParam(value="endeavor") String endeavor,
        @RequestParam(value="organism") String organism,
        @RequestParam(value="compliments", required=false) String compliments
    ) {
        session.setAttribute("number", number);
        session.setAttribute("city", city);
        session.setAttribute("endeavor", endeavor);
        session.setAttribute("organism", organism);
        if (!compliments.equals("")) {
            session.setAttribute("compliments", compliments);
        }

        return "redirect:/omikuji/results";
    }

    @GetMapping("/results")
    public String results(HttpSession session) {
        return "results.jsp";
    }
}

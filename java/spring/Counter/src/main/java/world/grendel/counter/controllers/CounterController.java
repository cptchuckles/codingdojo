package world.grendel.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpSession;

/**
 * CounterController
 */
@Controller
public class CounterController {
    @GetMapping("/")
    public String index(HttpSession session) {
        if (session.getAttribute("counter") == null) {
            session.setAttribute("counter", 0);
        } else {
            int count = (int) session.getAttribute("counter");
            session.setAttribute("counter", count + 1);
        }
        return "index.jsp";
    }

    @GetMapping("/counter")
    public String counter(HttpSession session) {
        if (session.getAttribute("counter") == null) {
            session.setAttribute("counter", 0);
        }

        return "counter.jsp";
    }

    @GetMapping("/reset")
    public RedirectView reset(HttpSession session) {
        session.removeAttribute("counter");
        return new RedirectView("/");
    }

    @GetMapping("/secretincrement")
    public RedirectView secretIncrement(HttpSession session) {
        if (session.getAttribute("counter") == null) {
            session.setAttribute("counter", 1);
        } else {
            int count = (int) session.getAttribute("counter");
            session.setAttribute("counter", count + 1);
        }
        return new RedirectView("/");
    }
}

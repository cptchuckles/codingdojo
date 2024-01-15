package world.grendel.jspdemo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * JspController
 */
@Controller
public class JspController {
    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("fruit", "banana");
        return "index.jsp";
    }
}

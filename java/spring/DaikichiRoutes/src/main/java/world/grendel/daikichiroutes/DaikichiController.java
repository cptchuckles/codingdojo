package world.grendel.daikichiroutes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Daikichi
 */
@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
    @RequestMapping("/")
    public String daikichi() {
        return ("Welcome");
    }

    @RequestMapping("/today")
    public String today() {
        return "Today you will find luck in all your endeavors!";
    }

    @RequestMapping("/tomorrow")
    public String tomorrow() {
        return "Tomorrow, an opportunity will arise, so be sur to be open to new ideas!";
    }
}

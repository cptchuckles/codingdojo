package world.grendel.daikichiroutes;

import org.springframework.web.bind.annotation.PathVariable;
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

    @RequestMapping("/travel/{destination}")
    public String travel(@PathVariable("destination") String destination) {
        return "Congratulations! You will be travelling to " + destination;
    }

    @RequestMapping("/lotto/{number}")
    public String lotto(@PathVariable("number") String number) {
        int luckyNumber;
        try {
            luckyNumber = Integer.parseInt(number);
        }
        catch (Exception e) {
            return "Your lottery number must be an integer";
        }

        if (luckyNumber % 2 == 0) {
            return "You will take a grand journey in the near future, but be wary of tempting offers.";
        }
        else {
            return "You have enjoyed the fruits of your labor, but now is a great time to spend time with family and friends.";
        }
    }
}

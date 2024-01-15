package world.grendel.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * HelloController
 */
@RestController
public class HelloController {
    @RequestMapping("/")
    public String hello(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "last_name", required = false) String lastName,
            @RequestParam(value = "times", required = false) String times) {
        String result = "Hello";

        if (name == null && lastName == null) {
            result = "Hello Human";
        } else {
            if (name != null) {
                result += " " + name;
            }
            if (lastName != null) {
                result += " " + lastName;
            }
        }

        if (times != null) {
            try {
                int numberOfTimes = Integer.parseInt(times);
                String originalMessage = result;
                for (int i = 1; i < numberOfTimes; i++) {
                    result += " " + originalMessage;
                }
            } catch (Exception e) {
                return "'times' must be an integer";
            }
        }

        return result;
    }
}

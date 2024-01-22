package world.grendel.dojosandninjas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class DojosAndNinjasApplication {

	public static void main(String[] args) {
		SpringApplication.run(DojosAndNinjasApplication.class, args);
	}

	@GetMapping("/")
	public String home() {
		return "home.jsp";
	}

}

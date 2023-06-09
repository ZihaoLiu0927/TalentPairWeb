package talentpair.backend;
import talentpair.backend.auth.User;
import talentpair.backend.auth.UserRepository;
import talentpair.backend.auth.UserRequest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@RestController
public class BackendApplication extends SpringBootServletInitializer {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@GetMapping("/test")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }

	@PostMapping("/auth/adduser")
	public @ResponseBody String addNewUser(@RequestBody UserRequest userRequest) {
	  // @ResponseBody means the returned String is the response, not a view name
	  // @RequestParam means it is a parameter from the GET or POST request
	  User n = new User();
	  n.setName(userRequest.getName());
	  n.setEmail(userRequest.getEmail());
	  n.setPassword(userRequest.getPassword());
	  Optional<User> existUser = userRepository.findByEmail(userRequest.getEmail());
	  if (existUser.isPresent()) {
		  return "Account with this email already exists";
	  }
	  userRepository.save(n);
	  return "OK";
	}

	@GetMapping("/auth/getbyemail")
	public @ResponseBody Optional<User> getUserByEmail(@RequestParam String email) {
	  return userRepository.findByEmail(email);
	}

	@GetMapping("/auth/getbyid")
	public @ResponseBody Optional<User> getUserByEmail(@RequestParam Integer id) {
	  return userRepository.findById(id);
	}
  
	@GetMapping("/auth/getall")
	public @ResponseBody Iterable<User> getAllUsers() {
	  return userRepository.findAll();
	}
}

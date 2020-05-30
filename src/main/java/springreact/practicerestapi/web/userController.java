package springreact.practicerestapi.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springreact.practicerestapi.Validator.UserValidator;
import springreact.practicerestapi.domain.UserAccount;
import springreact.practicerestapi.services.MapvalidationError;
import springreact.practicerestapi.services.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class userController {

    private MapvalidationError mapvalidationError;
    private UserService userService;
    private UserValidator userValidator;

    public userController(MapvalidationError mapvalidationError, UserService userService, UserValidator userValidator) {
        this.mapvalidationError = mapvalidationError;
        this.userService = userService;
        this.userValidator = userValidator;
    }


    @PostMapping("/register")
    public ResponseEntity<?> addingUser(@Valid @RequestBody UserAccount user, BindingResult result){
        userValidator.validate(user,result);
        ResponseEntity<?> error=mapvalidationError.MapvalidationService(result);
        if(error!=null){
            return error;
        }
        UserAccount newUser=userService.saveUser(user);
        return  new ResponseEntity<>(newUser, HttpStatus.CREATED);

    }
}

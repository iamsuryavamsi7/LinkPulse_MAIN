package com.Client01.Controller.Auth;

import com.Client01.Error.PasswordsNotMatchException;
import com.Client01.Error.UserIsLockedException;
import com.Client01.Model.Auth.AuthenticationRequestModel;
import com.Client01.Model.Auth.AuthenticationResponseModel;
import com.Client01.Model.Auth.RegistrationRequestModel;
import com.Client01.Service.Auth.AuthService.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody RegistrationRequestModel request
    ) throws PasswordsNotMatchException {

        String userRegistered = authService.register(request);

        return ResponseEntity.ok(userRegistered);

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponseModel> authentication(
            @Valid  @RequestBody AuthenticationRequestModel request
    ) throws UserIsLockedException {

        AuthenticationResponseModel response = authService.authenticate(request);

        return ResponseEntity.ok(response);

    }

}

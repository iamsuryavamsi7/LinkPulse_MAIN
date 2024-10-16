package com.Client01.Service.Auth.AuthService;

import com.Client01.Entity.Role.TokenType;
import com.Client01.Entity.Token;
import com.Client01.Entity.User;
import com.Client01.Error.PasswordsNotMatchException;
import com.Client01.Error.UserIsLockedException;
import com.Client01.Model.Auth.AuthenticationRequestModel;
import com.Client01.Model.Auth.AuthenticationResponseModel;
import com.Client01.Model.Auth.RegistrationRequestModel;
import com.Client01.Repo.ProjectsRepo;
import com.Client01.Repo.TokenRepo;
import com.Client01.Repo.UserRepo;
import com.Client01.Service.Config.JwtService;
import com.Client01.Service.Email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepo userRepo;

    private final TokenRepo tokenRepo;

    private final PasswordEncoder passwordEncoder;

    private final EmailSenderService emailSenderService;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final ProjectsRepo projectsRepo;

    private void saveToken(String accessToken, User user){

        Token token = Token.builder()
                .token(accessToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .accentureUser(user)
                .build();

        tokenRepo.save(token);

    }

    private void revokeUserTokens(User user){

        List<Token> validUserTokens = tokenRepo.findAllValidTokensByUser(user.getId());

        if ( validUserTokens.isEmpty() ){

            return;

        }

        validUserTokens.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);
        });

        tokenRepo.saveAll(validUserTokens);

    }

    @Async
    private void sendRegistrationEmail(String email) {
        emailSenderService.sendSimpleEmail(
                email,
                "\n\nYou have been registered successfully. Please wait for approval from your admin\n\n",
                "Registration Successful"
        );
    }

    public String register(RegistrationRequestModel request) throws PasswordsNotMatchException {

        if ( request.getPassword().equals(request.getConformPassword()) ) {

            User registeringUser = new User();

            BeanUtils.copyProperties(request, registeringUser);

            registeringUser.setRegisteredOn(new Date(System.currentTimeMillis()));
            registeringUser.setUnLocked(false);
            registeringUser.setPassword(passwordEncoder.encode(registeringUser.getPassword()));

            userRepo.save(registeringUser);

            sendRegistrationEmail(registeringUser.getEmail());

            return "User Registered Successfully";

        }

        throw new PasswordsNotMatchException("\n\n\nPasswords Not Match\n\n\n");

    }

    public AuthenticationResponseModel authenticate(AuthenticationRequestModel request) throws UserIsLockedException {

        User fetchedUser = userRepo.findByEmail(request.getEmail()).orElseThrow(
                () -> new UsernameNotFoundException("\n\n\nUser Name Not Found Exception\n\n\n")
        );

        if ( fetchedUser.isUnLocked()){

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            String jwtToken = jwtService.generateToken(fetchedUser, fetchedUser);

            revokeUserTokens(fetchedUser);

            saveToken(jwtToken, fetchedUser);

            return AuthenticationResponseModel.builder()
                    .accessToken(jwtToken)
                    .build();

        }

        throw new UserIsLockedException("User not Found");

    }

}

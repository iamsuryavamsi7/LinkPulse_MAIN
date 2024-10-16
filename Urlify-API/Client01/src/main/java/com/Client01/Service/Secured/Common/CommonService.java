package com.Client01.Service.Secured.Common;

import com.Client01.Entity.Projects;
import com.Client01.Entity.Role.Role;
import com.Client01.Error.ProjectNotFoundException;
import com.Client01.Model.Secured.CommonModel.ActivateUserModel;
import com.Client01.Model.Secured.CommonModel.UserObjectModel;
import com.Client01.Entity.User;
import com.Client01.Model.Secured.CommonModel.GetUserObjectRequestModel;
import com.Client01.Repo.ProjectsRepo;
import com.Client01.Repo.UserRepo;
import com.Client01.Service.Config.JwtService;
import com.Client01.Service.Email.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommonService {

    private final JwtService jwtService;

    private final UserRepo userRepo;

    private final ProjectsRepo projectsRepo;

    private final EmailSenderService emailSenderService;

    public UserObjectModel getUserObject(GetUserObjectRequestModel request) {

        String userEmail = jwtService.extractUserName(request.getAccessToken());

        User fetchedUser = userRepo.findByEmail(userEmail).orElseThrow();

        UserObjectModel user = new UserObjectModel();

        BeanUtils.copyProperties(fetchedUser, user);

        return user;

    }

    public List<LockedUserObjectsModel> fetchLockedUsers() {

        return userRepo.findByUnLocked(false)
                .stream()
                .map(user -> {

                    LockedUserObjectsModel lockedUser = new LockedUserObjectsModel();

                    BeanUtils.copyProperties(user, lockedUser);

                    return lockedUser;

                })
                .collect(Collectors.toList());

    }

    @Async
    private void sendRegistrationEmail(String email) {
        emailSenderService.sendSimpleEmail(
                email,
                """


                        You can able to login to your account. You are not yet assigned to any project,
                        
                        contact your admin.
                        

                        """,
                "Registration Approved"
        );
    }

    public String activateUser(Long userId, Long projectId, ActivateUserModel activateUserModel) throws ProjectNotFoundException {

        User fetchedUser = userRepo.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found")
        );

        Projects fetchedProject = projectsRepo.findById(projectId).orElseThrow(
                () -> new ProjectNotFoundException("Project Not Found")
        );

        fetchedUser.setRole(activateUserModel.getRoleValue());
        fetchedUser.setDesignation(activateUserModel.getDesignationName());

        fetchedUser.setUnLocked(true);

        fetchedProject.getUsers().add(fetchedUser);

        fetchedUser.setProject(fetchedProject);

        projectsRepo.save(fetchedProject);

        userRepo.save(fetchedUser);

        sendRegistrationEmail(fetchedUser.getEmail());

        return "User Activated";

    }

}

package com.Client01.Controller.Secured.Common;

import com.Client01.Error.ProjectNotFoundException;
import com.Client01.Model.Secured.CommonModel.ActivateUserModel;
import com.Client01.Model.Secured.CommonModel.GetUserObjectRequestModel;
import com.Client01.Model.Secured.CommonModel.UserObjectModel;
import com.Client01.Service.Secured.Common.CommonService;
import com.Client01.Service.Secured.Common.LockedUserObjectsModel;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/common")
public class CommonController {

    private final CommonService commonService;

    @PostMapping("/getUserObject")
    public ResponseEntity<UserObjectModel> getUserObject(
            @RequestBody GetUserObjectRequestModel request
    ){

        UserObjectModel fetchedUserObject =  commonService.getUserObject(request);

        return ResponseEntity.ok(fetchedUserObject);

    }

    @GetMapping("/retrieve-locked-users")
    public ResponseEntity<List<LockedUserObjectsModel>> fetchAllLockedUsers(){

        List<LockedUserObjectsModel> fetchedLockedUsers = commonService.fetchLockedUsers();

        return ResponseEntity.ok(fetchedLockedUsers);

    }

    @PostMapping("/userId/{userId}/projectId/{projectId}/activateUser")
    public ResponseEntity<String> activateUser(
            @PathVariable("userId") Long userId,
            @PathVariable("projectId") Long projectId,
            @Valid @RequestBody ActivateUserModel activateUserModel
    ) throws ProjectNotFoundException {

        System.out.println("Activating user with ID: " + userId + " for project ID: " + projectId);

        String userActivatedMessage = commonService.activateUser(userId, projectId, activateUserModel);

        return ResponseEntity.ok(userActivatedMessage);

    }

}

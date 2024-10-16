package com.Client01.Controller.Secured.Assignment;

import com.Client01.Entity.User;
import com.Client01.Model.Secured.AssignmentModel.ProjectManagersModel01;
import com.Client01.Service.Secured.Assignment.AssignmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/assign")
public class AssignmentController {

    private final AssignmentService assignmentService;

    @GetMapping("/fetchProjectManagerByProjectId/{projectId}")
    public ResponseEntity<List<ProjectManagersModel01>> fetchProjectManagersByProjectId(
            @PathVariable("projectId") Long id
    ){

        List<ProjectManagersModel01> fetchedProjectManagers = assignmentService.fetchProjectManagersByProjectId(id);

        return ResponseEntity.ok(fetchedProjectManagers);

    }

    @GetMapping("/projects/{projectId}/projectManager/{projectManagerId}")
    public ResponseEntity<String> assignProjectManagerToProject(
            @PathVariable("projectId") Long projectId,
            @PathVariable("projectManagerId") Long projectManagerId
    ){

        String assignedMessage = assignmentService.assignProjectManagerToProject(projectId, projectManagerId);

        return ResponseEntity.ok(assignedMessage);

    }

    @GetMapping("/projectManager/{projectManagerId}/TeamLead/{teamLeadId}")
    public ResponseEntity<String> assignTeamLeadToProjectManager(
            @PathVariable("projectManagerId") Long projectManagerId,
            @PathVariable("teamLeadId") Long teamLeadId
    ){

        String assignedMessage = assignmentService.assignTeamLeadToProjectManager1(projectManagerId, teamLeadId);

        System.out.println("\n\n\n Its running \n\n\n");

        return ResponseEntity.ok(assignedMessage);

    }

    @GetMapping("/teamLead/{teamLeadId}/TeamMember/{teamMemberId}")
    public ResponseEntity<String> assignTeamMemberToTeamLead(
            @PathVariable("teamLeadId") Long teamLeadId,
            @PathVariable("teamMemberId") Long teamMemberId
    ){

        String fetchedUser = assignmentService.assignTeamMemberToTeamLead(teamLeadId, teamMemberId);

        return ResponseEntity.ok(fetchedUser);

    }
    
//     Main APIs

//    @PostMapping("/createUserAndAssignWith")

}

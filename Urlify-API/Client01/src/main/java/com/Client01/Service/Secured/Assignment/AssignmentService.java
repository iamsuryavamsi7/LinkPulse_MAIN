package com.Client01.Service.Secured.Assignment;

import com.Client01.Entity.Projects;
import com.Client01.Entity.Role.Role;
import com.Client01.Entity.User;
import com.Client01.Model.Secured.AssignmentModel.ProjectManagersModel01;
import com.Client01.Repo.ProjectsRepo;
import com.Client01.Repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AssignmentService {

    private final ProjectsRepo projectsRepo;

    private final UserRepo userRepo;

    public List<ProjectManagersModel01> fetchProjectManagersByProjectId(Long id) {

        Projects fetchedProject = projectsRepo.findById(id).orElseThrow();

        return fetchedProject.getUsers()
                .stream()
                .filter(user -> user.getRole() == Role.PROJECTMANAGER)
                .map(user -> new ProjectManagersModel01(
                        user.getId(),
                        user.getFirstName()
                ))
                .collect(Collectors.toList());

    }

    public String assignProjectManagerToProject(Long projectId, Long projectManagerId) {

        Projects fetchedProject = projectsRepo.findById(projectId).orElseThrow();

        User fetchedProjectManager = userRepo.findById(projectManagerId).orElseThrow();

        fetchedProject.getUsers().add(fetchedProjectManager);

        projectsRepo.save(fetchedProject);

        fetchedProjectManager.setProject(fetchedProject);

        userRepo.save(fetchedProjectManager);

        return "ProjectManager Assigned to Project";

    }

    public String assignTeamLeadToProjectManager1(Long projectManagerId, Long teamLeadId) {

        User fetchedProjectManager = userRepo.findById(projectManagerId).orElseThrow(() -> new UsernameNotFoundException("User Not Found"));

        User fetchedTeamLead = userRepo.findById(teamLeadId).orElseThrow( () -> new UsernameNotFoundException("User Not Found") );

        fetchedProjectManager.getTeamLeads().add(fetchedTeamLead);

        fetchedTeamLead.setProjectManager(fetchedProjectManager);

        userRepo.save(fetchedProjectManager);

        userRepo.save(fetchedTeamLead);

        return "Team Lead Assigned To ProjectManager";

    }

    public String assignTeamMemberToTeamLead(Long teamLeadId, Long teamMemberId) {

        User fetchedTeamLead = userRepo.findById(teamLeadId).orElseThrow();

        User fetchedTeamMember = userRepo.findById(teamMemberId).orElseThrow();

        fetchedTeamLead.getTeamMembers().add(fetchedTeamMember);

        fetchedTeamMember.setTeamLead(fetchedTeamLead);

        userRepo.save(fetchedTeamLead);

        userRepo.save(fetchedTeamMember);

        return "Team Member Assigned To Team Lead";

    }

}

package com.Client01.Service.Secured.Project;

import com.Client01.Controller.Secured.Projects.ProjectsOnlyModel;
import com.Client01.Entity.Projects;
import com.Client01.Entity.Role.Role;
import com.Client01.Entity.User;
import com.Client01.Model.Secured.ProjectModel.*;
import com.Client01.Repo.ProjectsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectsService {

    private final ProjectsRepo projectsRepo;

    public String addProject(addProjectRequestModel request) {

        Projects projects = new Projects();

        BeanUtils.copyProperties(request, projects);

        projects.setProjectCreatedOn(new Date(System.currentTimeMillis()));

        projectsRepo.save(projects);

        return "Project Added";

    }

    public List<GetProjectObjectsModel> fetchAllProjects() {

        return projectsRepo.findAll()
                .stream()
                .map(project -> {

                    //Create the GetProjectObjectsModel to return
                    GetProjectObjectsModel project1 = new GetProjectObjectsModel();

                    //Add Project data to it first
                    project1.setProjectName(project.getProjectName());
                    project1.setProjectDescription(project.getProjectDescription());
                    project1.setProjectCreatedOn(project.getProjectCreatedOn());

                    //Fetch List of ProjectManagers first
                    List<User> projectManagers = project.getUsers();

                    //Not
                    List<ProjectManagersDTO> projectManagersDTOS = projectManagers.stream()
                            .filter(user -> user.getRole() == Role.PROJECTMANAGER)
                            .map(projectManager -> {

                                ProjectManagersDTO projectManager1 = new ProjectManagersDTO();

                                projectManager1.setProjectManagerName(projectManager.getFirstName() + " " + projectManager.getLastName());

                                List<User> teamLeads = projectManager.getTeamLeads();

                                List<TeamLeadDTO> teamLeadDTOS = teamLeads.stream()
                                        .filter(user -> user.getRole() == Role.TEAMLEAD)
                                        .map(teamLead -> {

                                            TeamLeadDTO teamLead1 = new TeamLeadDTO();

                                            teamLead1.setTeamLeadName(teamLead.getFirstName() + " " + teamLead.getLastName());

                                            List<User> teamMembers = teamLead.getTeamMembers();

                                            List<TeamMemberDTO> teamMemberDTOS = teamMembers.stream()
                                                    .filter(user -> user.getRole() == Role.TEAMMEMBER)
                                                    .map(teamMember -> {

                                                        TeamMemberDTO teamMember1 = new TeamMemberDTO();

                                                        teamMember1.setTeamMemberName(teamMember.getFirstName() + " " + teamMember.getLastName());

                                                        return teamMember1;

                                                    })
                                                    .toList();

                                            teamLead1.setTeamMembers(teamMemberDTOS);

                                            return teamLead1;

                                        })
                                        .toList();

                                projectManager1.setTeamLeads(teamLeadDTOS);

                                return projectManager1;

                            })
                            .toList();

                    project1.setProjectManagers(projectManagersDTOS);

                    return project1;

                })
                .collect(Collectors.toList());
    }

    public List<ProjectsOnlyModel> fetchProjectsOnly() {

        return projectsRepo.findAll()
                .stream()
                .map(project -> {

                    ProjectsOnlyModel projectOnly = new ProjectsOnlyModel();

                    projectOnly.setId(project.getId());
                    projectOnly.setProjectName(project.getProjectName());
                    projectOnly.setProjectDesc(project.getProjectDescription());
                    projectOnly.setProjectCreatedOn(project.getProjectCreatedOn());

                    return projectOnly;

                })
                .collect(Collectors.toList());

    }

    public String deleteProjectById(Long id) {

        projectsRepo.deleteById(id);

        return "Project Deleted";

    }

    public ProjectsOnlyModel fetchProjectById(Long id) {

        Projects project = projectsRepo.findById(id).orElseThrow();

        return ProjectsOnlyModel.builder()
                .id(project.getId())
                .projectName(project.getProjectName())
                .projectDesc(project.getProjectDescription())
                .projectCreatedOn(project.getProjectCreatedOn())
                .build();

    }

    public String updateProjectById(Long id, UpdateProjectModel request) {

        Projects fetchedProject = projectsRepo.findById(id).orElseThrow(() ->
                new RuntimeException("Project not found"));


        fetchedProject.setProjectName(request.getProjectName());
        fetchedProject.setProjectDescription(request.getProjectDescription());

        projectsRepo.save(fetchedProject);

        return "Project Updated";

    }

}

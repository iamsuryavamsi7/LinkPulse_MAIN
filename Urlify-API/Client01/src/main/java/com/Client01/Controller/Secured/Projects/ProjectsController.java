package com.Client01.Controller.Secured.Projects;

import com.Client01.Model.Secured.ProjectModel.GetProjectObjectsModel;
import com.Client01.Model.Secured.ProjectModel.UpdateProjectModel;
import com.Client01.Model.Secured.ProjectModel.addProjectRequestModel;
import com.Client01.Service.Secured.Project.ProjectsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/projects")
@RequiredArgsConstructor
public class ProjectsController {

    private final ProjectsService projectsService;

    @PostMapping("/addProject")
    public ResponseEntity<String> addProject(
            @Valid @RequestBody addProjectRequestModel request
    ){

        String projectAdded = projectsService.addProject(request);

        return ResponseEntity.ok(projectAdded);

    }

    @GetMapping("/getProjects")
    public ResponseEntity<List<GetProjectObjectsModel>> fetchAllProjects(){

        List<GetProjectObjectsModel> fetchedProjects = projectsService.fetchAllProjects();

        return ResponseEntity.ok(fetchedProjects);

    }

    @GetMapping("/getProjectOnly")
    public ResponseEntity<List<ProjectsOnlyModel>> fetchProjectsOnly(){

        List<ProjectsOnlyModel> fetchAllProjects = projectsService.fetchProjectsOnly();

        return ResponseEntity.ok(fetchAllProjects);

    }

    @GetMapping("/getProjectById/{projectId}")
    public ResponseEntity<ProjectsOnlyModel> fetchProjectById(
            @PathVariable("projectId") Long id
    ){

        ProjectsOnlyModel fetchedProject = projectsService.fetchProjectById(id);

        return ResponseEntity.ok(fetchedProject);

    }

    @DeleteMapping("/deleteProject/{projectId}")
    public ResponseEntity<String> deleteProjectById(
            @PathVariable("projectId") Long id
    ){

        String deletedMessage = projectsService.deleteProjectById(id);

        return ResponseEntity.ok(deletedMessage);

    }

    @PutMapping("/updateProject/{projectId}")
    public ResponseEntity<String> updateProjectById(
            @PathVariable("projectId") Long id,
            @RequestBody UpdateProjectModel request
    ){

        String projectUpdated = projectsService.updateProjectById(id, request);

        return ResponseEntity.ok(projectUpdated);

    }

}

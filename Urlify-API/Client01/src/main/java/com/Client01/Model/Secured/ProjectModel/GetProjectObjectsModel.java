package com.Client01.Model.Secured.ProjectModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetProjectObjectsModel {

    private String projectName;
    private String projectDescription;
    private Date projectCreatedOn;
    private List<ProjectManagersDTO> projectManagers = new ArrayList<>();

}

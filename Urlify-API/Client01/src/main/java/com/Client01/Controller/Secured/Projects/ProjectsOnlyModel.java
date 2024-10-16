package com.Client01.Controller.Secured.Projects;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectsOnlyModel {

    private Long id;
    private String projectName;
    private String projectDesc;
    private Date projectCreatedOn;

}

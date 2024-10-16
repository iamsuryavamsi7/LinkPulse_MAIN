package com.Client01.Model.Secured.ProjectModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectManagersDTO {

    private String projectManagerName;
    private List<TeamLeadDTO> teamLeads = new ArrayList<>();

}

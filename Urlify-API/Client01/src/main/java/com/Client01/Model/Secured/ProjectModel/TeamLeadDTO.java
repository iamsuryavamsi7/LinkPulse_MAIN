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
public class TeamLeadDTO {

    private String teamLeadName;
    private List<TeamMemberDTO> teamMembers = new ArrayList<>();

}

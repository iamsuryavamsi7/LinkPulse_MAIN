package com.Client01.Model.Secured.ProjectModel;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class addProjectRequestModel {

    @NotNull
    @NotBlank(message = "Project Name should not be empty")
    private String projectName;

    @NotNull
    @NotBlank(message = "Project Description should not be empty")
    private String projectDescription;

}

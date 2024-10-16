package com.Client01.Model.Secured.CommonModel;

import com.Client01.Entity.Role.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class ActivateUserModel {

    @NotNull
    @Enumerated(EnumType.STRING)
    private Role roleValue;

    @NotNull
    @NotBlank
    private String designationName;

}

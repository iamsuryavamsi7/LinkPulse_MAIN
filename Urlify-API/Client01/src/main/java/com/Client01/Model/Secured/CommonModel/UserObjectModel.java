package com.Client01.Model.Secured.CommonModel;

import com.Client01.Entity.Role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserObjectModel {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private String designation;

}

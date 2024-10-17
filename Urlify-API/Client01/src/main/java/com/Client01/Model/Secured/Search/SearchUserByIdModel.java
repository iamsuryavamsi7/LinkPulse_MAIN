package com.Client01.Model.Secured.Search;

import com.Client01.Entity.Role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchUserByIdModel {

    private Long userId;
    private String userName;
    private Role userRole;
    private String userEmail;
    private String userDesignation;
    private String projectName;
    private String profilePicUrl;

}

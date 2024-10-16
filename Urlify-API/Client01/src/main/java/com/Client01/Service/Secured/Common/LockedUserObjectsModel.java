package com.Client01.Service.Secured.Common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LockedUserObjectsModel {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String designation;

}

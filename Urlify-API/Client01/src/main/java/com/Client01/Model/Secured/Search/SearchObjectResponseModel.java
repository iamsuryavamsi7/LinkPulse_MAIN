package com.Client01.Model.Secured.Search;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchObjectResponseModel {

    private Long userId;
    private String userName;
    private String userEmail;

}

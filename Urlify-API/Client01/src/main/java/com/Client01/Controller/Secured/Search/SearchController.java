package com.Client01.Controller.Secured.Search;

import com.Client01.Model.Secured.Search.SearchObjectDTO;
import com.Client01.Model.Secured.Search.SearchObjectResponseModel;
import com.Client01.Model.Secured.Search.SearchUserByIdModel;
import com.Client01.Service.Secured.Search.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/search")
public class SearchController {

    private final SearchService searchService;

    @PostMapping("/searchUser")
    public ResponseEntity<List<SearchObjectResponseModel>> searchUser(
            @RequestBody SearchObjectDTO request
    ){

        List<SearchObjectResponseModel> fetchedUser = searchService.searchUser(request);

        return ResponseEntity.ok(fetchedUser);

    }

    @GetMapping("/searchUserById/{userId}")
    public ResponseEntity<SearchUserByIdModel> searchUserById(
            @PathVariable("userId") Long userId
    ){

        SearchUserByIdModel fetchedUser = searchService.searchUserById(userId);

        return ResponseEntity.ok(fetchedUser);

    }

}

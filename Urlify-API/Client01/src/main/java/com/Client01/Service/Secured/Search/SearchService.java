package com.Client01.Service.Secured.Search;

import com.Client01.Entity.Projects;
import com.Client01.Entity.User;
import com.Client01.Model.Secured.Search.SearchObjectDTO;
import com.Client01.Model.Secured.Search.SearchObjectResponseModel;
import com.Client01.Model.Secured.Search.SearchUserByIdModel;
import com.Client01.Repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final UserRepo userRepo;

    public List<SearchObjectResponseModel> searchUser(SearchObjectDTO request) {

        String searchObject = request.getSearchObject();

        String[] searchTerms = searchObject.split(" ");

        if ( searchTerms.length == 1 ) {

            return userRepo.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrEmailContainingIgnoreCase(searchTerms[0], searchTerms[0], searchTerms[0])
                    .stream()
                    .map(user -> {

                        SearchObjectResponseModel searchObject1 = new SearchObjectResponseModel();

                        searchObject1.setUserId(user.getId());
                        searchObject1.setUserName(user.getFirstName() + " " + user.getLastName());
                        searchObject1.setUserEmail(user.getEmail());

                        return searchObject1;

                    })
                    .collect(Collectors.toList());

        } else if ( searchTerms.length == 2 ){

            return userRepo.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrEmailContainingIgnoreCase(searchTerms[0], searchTerms[1], searchObject)
                    .stream()
                    .map(user -> {

                        SearchObjectResponseModel searchObject1 = new SearchObjectResponseModel();

                        searchObject1.setUserId(user.getId());
                        searchObject1.setUserName(user.getFirstName() + " " + user.getLastName());
                        searchObject1.setUserEmail(user.getEmail());

                        return searchObject1;

                    })
                    .collect(Collectors.toList());

        } else {

            String combinedSearchTerm = String.join(" ", Arrays.copyOfRange(searchTerms, 1, searchTerms.length));
            return userRepo.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrEmailContainingIgnoreCase(searchTerms[0], combinedSearchTerm, searchObject)
                    .stream()
                    .map(user -> {

                        SearchObjectResponseModel searchObject1 = new SearchObjectResponseModel();

                        searchObject1.setUserId(user.getId());
                        searchObject1.setUserName(user.getFirstName() + " " + user.getLastName());
                        searchObject1.setUserEmail(user.getEmail());

                        return searchObject1;

                    })
                    .collect(Collectors.toList());

        }

    }

    public SearchUserByIdModel searchUserById(Long userId) {

        User fetchedUser = userRepo.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("\n\n\n User Not Found\n\n\n")
        );

        System.out.println(fetchedUser.getRole());

        Projects fetchedUserProject = fetchedUser.getProject();

        return SearchUserByIdModel.builder()
                .userId(fetchedUser.getId())
                .userName(fetchedUser.getFirstName() + " " + fetchedUser.getLastName())
                .userEmail(fetchedUser.getEmail())
                .userDesignation(fetchedUser.getDesignation())
                .userRole(fetchedUser.getRole())
                .projectName(fetchedUserProject != null ? fetchedUserProject.getProjectName() : null)
                .profilePicUrl(fetchedUser.getProfilePicUrl())
                .build();

    }
}

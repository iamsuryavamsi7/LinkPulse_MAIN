package com.Client01.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(
        name = "accenture_projects"
)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Projects {

    @Id
    @GeneratedValue
    private Long id;

    private String projectName;

    @NotNull
    private String projectDescription;

    @NotNull
    private Date projectCreatedOn;

    @OneToMany(
            mappedBy = "project",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JsonManagedReference
    private List<User> users = new ArrayList<>();

}

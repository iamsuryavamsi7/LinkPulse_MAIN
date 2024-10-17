package com.Client01.Entity;

import com.Client01.Entity.Role.Role;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(
        name = "accenture_users",
        uniqueConstraints = @UniqueConstraint(
                columnNames = {
                        "email"
                }
        )
)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements UserDetails {

    @Id
    @GeneratedValue
    private Long id;

    private String profilePicUrl;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @Email
    private String email;

    @NotNull
    private String password;

    @NotNull
    private boolean unLocked;

    private String designation;

    private Date registeredOn;

    @OneToMany(mappedBy = "accentureUser", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Token> tokens = new ArrayList<>();

    @OneToMany(mappedBy = "teamLead", cascade = CascadeType.ALL)
    @JsonManagedReference("teamLeadRef")
    private List<User> teamMembers = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "team_lead_id")
    @JsonBackReference("teamLeadRef")
    private User teamLead;

    @OneToMany(mappedBy = "projectManager", cascade = CascadeType.ALL)
    @JsonManagedReference("projectManagerRef")
    private List<User> teamLeads = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "project_manager_id")
    @JsonBackReference("projectManagerRef")
    private User projectManager;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToOne
    @JoinColumn(name = "project_id")
    @JsonBackReference
    private Projects project;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

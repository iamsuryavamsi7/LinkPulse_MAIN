package com.Client01.Entity;

import com.Client01.Entity.Role.TokenType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(
        name = "accenture_token_table"
)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Token {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(
            length = 1024
    )
    private String token;

    @Enumerated(EnumType.STRING)
    private TokenType tokenType;

    @NotNull
    private boolean expired;

    @NotNull
    private boolean revoked;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "accenture_user_id"
    )
    @JsonBackReference
    private User accentureUser;

}
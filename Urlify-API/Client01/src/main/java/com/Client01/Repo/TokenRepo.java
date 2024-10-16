package com.Client01.Repo;

import com.Client01.Entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepo extends JpaRepository<Token, Long> {

    @Query("""        
        SELECT t FROM Token t INNER JOIN t.accentureUser u
        WHERE u.id = :userId AND (t.expired = false OR t.revoked = false)
    """)
    List<Token> findAllValidTokensByUser(Long userId);

    Optional<Token> findByToken(String accentureToken);

    @Query(
            value = "DELETE FROM accenture_token_table \n" +
                    "WHERE expired = true OR revoked = true",
            nativeQuery = true
    )
    void deleteTokensByExpiredOrRevoked();
}
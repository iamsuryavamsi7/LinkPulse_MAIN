package com.Client01.Repo;

import com.Client01.Entity.Projects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectsRepo extends JpaRepository<Projects, Long> {
}

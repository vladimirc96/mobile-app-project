package com.project.mobileapi.repository;

import com.project.mobileapi.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}

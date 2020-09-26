package com.edudev.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edudev.back.model.Warning;

@Repository
public interface WarningRepository extends JpaRepository<Warning, Long> {

}

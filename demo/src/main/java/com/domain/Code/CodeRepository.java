package com.domain.Code;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CodeRepository extends JpaRepository<Code, String> {
  public List<Code> findAllByCdType(String type);
}

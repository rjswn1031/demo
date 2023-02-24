package com.domain.Member;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {

    @Id
    @Column(updatable = false, unique = true, nullable = false)
    private String memId;
    @Column(nullable = false)
    private String memPass;
    @Column(nullable = false)
    private String memRole;
}

package com.movieSearcher.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "T_COMPANY")
public class Company {
    @Id
    private String companyCd;
    private String companyNm;
}

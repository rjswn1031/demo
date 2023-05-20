package com.movieSearcher.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieSearcher.model.Company;
import com.movieSearcher.repository.CompanyRepository;

@Service
public class CompanyService {
    
    @Autowired
    private CompanyRepository companyRepository;

    public void save(Company company) {
        companyRepository.save(company);
    }
}

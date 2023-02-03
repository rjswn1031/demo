package com.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.domain.parkingInfo.ParkingInfo;
import com.domain.parkingInfo.ParkingInfoRepository;

@Service
public class DataService {
    
    @Autowired
    ParkingInfoRepository parkingInfoRepository;

    public List<ParkingInfo> getAllList() {
        return parkingInfoRepository.findAll();
    }
}

package com.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.parkingInfo.ParkingInfo;

@CrossOrigin("*")
@RestController
public class DataContoller {
    
    @Autowired
    DataService dataService;

    @GetMapping("getParkingList")
    public List<ParkingInfo> getParkingList() {
        System.out.println("test");
        List<ParkingInfo> list = dataService.getAllList();
        return list;
    }
}

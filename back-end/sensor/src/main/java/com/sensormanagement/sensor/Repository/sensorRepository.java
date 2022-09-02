package com.sensormanagement.sensor.Repository;

import com.sensormanagement.sensor.Models.sensorModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface sensorRepository extends MongoRepository<sensorModel,String> {
    List<sensorModel> findByUserId(String userId);

    List<sensorModel> findAllByOrgId(String orgId);
}

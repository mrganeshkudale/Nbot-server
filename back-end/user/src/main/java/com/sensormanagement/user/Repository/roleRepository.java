package com.sensormanagement.user.Repository;

import com.sensormanagement.user.Models.userRole;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface roleRepository extends MongoRepository<userRole,String> {
    userRole findByUserRole(String userRole);
}

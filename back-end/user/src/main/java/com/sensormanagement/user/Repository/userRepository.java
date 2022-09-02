package com.sensormanagement.user.Repository;

import com.sensormanagement.user.Models.userModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface userRepository extends MongoRepository<userModel,String> {

    userModel findByUsernameAndPassword(String tempEmailId, String tempPassword);

    List<userModel> findByOrgId(String orgId);
}

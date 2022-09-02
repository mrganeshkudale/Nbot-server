package com.sensormanagement.organisation.Repositories;

import com.sensormanagement.organisation.Models.organisationModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface orgRepository extends MongoRepository<organisationModel,String> {

    Optional<organisationModel> findByOrgName(String orgName);

    boolean deleteByOrgName(String orgName);
}

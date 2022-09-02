package com.sensormanagement.organisation.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection="Organisation")
public class organisationModel {
    @Id
    String orgId;
    String orgName;
    boolean orgStatus;
    LocalDateTime creationTime;


    //Null Constructor to use the null object while fetching the data
    public organisationModel() {
    }

    //Constructor for adding the values in repository
    public organisationModel(String orgId, String orgName, boolean orgStatus,LocalDateTime creationTime) {
        this.orgId = orgId;
        this.orgName = orgName;
        this.orgStatus = orgStatus;
        this.creationTime = creationTime;
    }


    //All the Getters and Setters
    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    public boolean isOrgStatus() {
        return orgStatus;
    }

    public void setOrgStatus(boolean orgStatus) {
        this.orgStatus = orgStatus;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(LocalDateTime creationTime) {
        this.creationTime = creationTime;
    }
}

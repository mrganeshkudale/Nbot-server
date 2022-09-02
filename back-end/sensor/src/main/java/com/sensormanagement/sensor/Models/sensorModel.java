package com.sensormanagement.sensor.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection="Sensor")
public class sensorModel {
    @Id
    private String id;
    private String userId;
    private String sensorName;
    private String orgId;
    private boolean Status;
    private String threshold;
    private LocalDateTime creationTime;

    private String licenseId;

    public sensorModel() {
    }

    public sensorModel(String id, String userId, String sensorName, String orgId, boolean status, String threshold, LocalDateTime creationTime, String licenseId) {
        this.id = id;
        this.userId = userId;
        this.sensorName = sensorName;
        this.orgId = orgId;
        Status = status;
        this.threshold = threshold;
        this.creationTime = creationTime;
        this.licenseId = licenseId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSensorName() {
        return sensorName;
    }

    public void setSensorName(String sensorName) {
        this.sensorName = sensorName;
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }

    public boolean isStatus() {
        return Status;
    }

    public void setStatus(boolean status) {
        Status = status;
    }

    public String getThreshold() {
        return threshold;
    }

    public void setThreshold(String threshold) {
        this.threshold = threshold;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(LocalDateTime creationTime) {
        this.creationTime = creationTime;
    }

    public String getLicenseId() {
        return licenseId;
    }

    public void setLicenseId(String licenseId) {
        this.licenseId = licenseId;
    }
}

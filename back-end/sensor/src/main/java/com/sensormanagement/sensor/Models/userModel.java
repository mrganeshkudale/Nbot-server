package com.sensormanagement.sensor.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "User")
public class userModel {
    @Id
    private String id;
    private String name;
    private String username;
    private String password;
    private String Status;
    private LocalDateTime creationTime;

    public userModel() {
    }

    public userModel(String id, String name, String username, String password, String status, LocalDateTime creationTime) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        Status = status;
        this.creationTime = creationTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(LocalDateTime creationTime) {
        this.creationTime = creationTime;
    }
}

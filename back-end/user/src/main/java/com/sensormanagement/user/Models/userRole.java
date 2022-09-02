package com.sensormanagement.user.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userRoles")
public class userRole {
    @Id
    private String userRoleId;
    private String userRole;

    public userRole() {
    }

    public userRole(String userRoleId, String userRole) {
        this.userRoleId = userRoleId;
        this.userRole = userRole;
    }

    public String getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(String userRoleId) {
        this.userRoleId = userRoleId;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}

package com.sensormanagement.user.Models;

public class userUpdateModel {
    private String userId;
    private String userStatus;
    private String password;

    public userUpdateModel() {
    }

    public userUpdateModel(String userId, String userStatus, String password) {
        this.userId = userId;
        this.userStatus = userStatus;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

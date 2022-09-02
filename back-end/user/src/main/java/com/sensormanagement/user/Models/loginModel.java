package com.sensormanagement.user.Models;

public class loginModel {
    String userId;
    String usrRoleId;
    String orgId;

    public loginModel() {
    }

    public loginModel(String userId, String usrRoleId, String orgId) {
        this.userId = userId;
        this.usrRoleId = usrRoleId;
        this.orgId = orgId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsrRoleId() {
        return usrRoleId;
    }

    public void setUsrRoleId(String usrRoleId) {
        this.usrRoleId = usrRoleId;
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }
}

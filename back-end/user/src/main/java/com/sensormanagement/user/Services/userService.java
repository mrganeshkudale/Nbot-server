package com.sensormanagement.user.Services;

import com.sensormanagement.user.Controllers.controller;
import com.sensormanagement.user.Models.userModel;
import com.sensormanagement.user.Models.userRole;
import com.sensormanagement.user.Repository.roleRepository;
import com.sensormanagement.user.Repository.userRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class userService {
    @Autowired
    userRepository ur;
    @Autowired
    roleRepository roleRepo;
    Logger logger = LoggerFactory.getLogger(userService.class);
    public boolean create(userModel request) {
        boolean isSuccess = false;
        try
        {
            request.setId(request.getId());
            request.setName(request.getName());
            request.setPassword(request.getPassword());
            request.setUsername(request.getUsername());
            request.setCreationTime(LocalDateTime.now());
            request.setStatus("Online");
            ur.save(request);
            isSuccess = true;
            logger.info("User Registered Successfully");
            return isSuccess;


        }
        catch (Exception e)
        {

            isSuccess = false;
            return isSuccess;
        }

    }




    public List<userModel> fetchAllUsers()
    {
        List<userModel> users = null;
        try
        {
            users = ur.findAll();
            return users;
        }
        catch (Exception e)
        {

        }
        return users;
    }

    public Optional<userModel> fetchById(String id)
    {
        Optional<userModel> user = null;
        try
        {
            user = ur.findById(id);
            return user;
        }
        catch (Exception e)
        {

        }
        return user;

    }
    public boolean updateUser(String id, userModel request)
    {

        Optional<userModel> user = null;
        boolean isSuccess = false;
        user = fetchById(id);
        String opMsg = "";
        userModel updateuser = new userModel();

        if (user.isPresent())
        {
            try {
                updateuser = user.get();
                request.setId(id);
                request.setName(request.getName());
                request.setUsername(updateuser.getUsername());
                request.setPassword(updateuser.getPassword());
                request.setCreationTime(updateuser.getCreationTime());
                request.setStatus(request.getStatus());
                request.setUsrRole(request.getUsrRole());
                ur.save(request);
                opMsg = "! User Data Updated Successfully !";
                logger.info("User Updated Successfully");
                isSuccess = true;

            }
            catch (Exception e) {
                logger.error(String.valueOf(e));
                isSuccess = false;

            }
        }
        else
        {
            isSuccess = false;
        }
        return isSuccess;
    }

    public boolean delete(String id) {


        String opMsg = "";
        boolean isSuccess = false;
        try
        {
            ur.deleteById(id);
            opMsg = "! The User is Deleted Successfully !";
            logger.info(opMsg);
            isSuccess = true;
        }
        catch (Exception e)
        {
            opMsg = "! Exception occurred while Deletion !";
            logger.error(String.valueOf(e));
            isSuccess = false;
        }
        return isSuccess;
    }

    public boolean fetchByEmailAndPassword(String tempEmailId, String tempPassword) {
        boolean isSuccess = false;
        userModel um = null;
        um = ur.findByUsernameAndPassword(tempEmailId,tempPassword);
        if(um != null)
        {
            isSuccess = true;
            return isSuccess;
        }
        else
        {
            isSuccess = false;
            return isSuccess;
        }
        
    }

    public Optional<userRole> getuserRoleByrole(String userRole) {
        Optional<userRole> opuRole = null;
        try
        {

            opuRole = Optional.ofNullable(roleRepo.findByUserRole(userRole));

        }
        catch (Exception e)
        {
            System.out.println(e);

        }
        return opuRole;
    }

    public boolean addUserRole(userRole request) {
        boolean isSuccess = false;
        try
        {
            request.setUserRoleId(request.getUserRoleId());
            request.setUserRole(request.getUserRole());
            roleRepo.save(request);
            logger.info("User Role Created Successfully");
            isSuccess = true;
        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
            isSuccess = false;
        }
        return isSuccess;
    }

    public Optional<userRole> getRolebyuserRoleId(String userRoleId) {
        Optional<userRole> opRole = null;
        try
        {
             opRole = roleRepo.findById(userRoleId);
        }
        catch (Exception e)
        {
            System.out.println(e);

        }
        return opRole;
    }
    public String getRoleByUserId(String userId)
    {
        Optional<userModel> opModel = null;
        try
        {
            opModel = ur.findById(userId);

        }
        catch (Exception e)
        {
            System.out.println(e);
        }
        return opModel.get().getUsrRole();
    }

    public List<userRole> fetchAllUserRoles() {
        List<userRole> users = null;
        try
        {
            users = roleRepo.findAll();
            return users;
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
        return users;
    }

    public List<userModel> fetchByOrgId(String orgId) {
        List<userModel> users = null;
        try
        {
            users = ur.findByOrgId(orgId);
            return users;
        }
        catch(Exception e)
        {
            logger.error(String.valueOf(e));
        }
        return users;
    }
}

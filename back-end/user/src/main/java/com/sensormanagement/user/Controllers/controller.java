package com.sensormanagement.user.Controllers;

import com.sensormanagement.user.Models.loginModel;
import com.sensormanagement.user.Models.userModel;
import com.sensormanagement.user.Models.userRole;
import com.sensormanagement.user.Repository.userRepository;
import com.sensormanagement.user.Services.userService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class controller {
    @Autowired
    userService service;
    Logger logger = LoggerFactory.getLogger(controller.class);
    @Autowired
    userRepository ur;

    @PostMapping("/User")
    public String createUser(@RequestBody userModel request)
    {


        String msg="";
        boolean success = false;
        logger.info("In the Create Controller of User");
        if(request!=null)
        {
            if(service.fetchById(request.getId()).isEmpty())
            {


                try {
                    success = service.create(request);


                }
                catch(Exception e) {
                    logger.error(String.valueOf(e));
                    success = false;

                }

            }
            else
            {
                logger.error("The user is already created");
                success = false;
            }

        }
        else
        {
            logger.error("The user Request is in Null");
            success = false;
        }
        if(success)
        {
            return request.getId();
        }
        else
        {
            return null;
        }


    }
    @PutMapping("/User/{id}")
    public boolean updateUser(@PathVariable String id,@RequestBody userModel request)
    {
        Optional<userModel> user = null;
        boolean isSuccess = false;
        user = getUserById(id);

        String opMsg = "";

        logger.info("In the Update Controller of User");
        try
        {
            isSuccess = service.updateUser(id,request);

        }
        catch(Exception e)
        {
            logger.error(String.valueOf(e));
            isSuccess = false;
        }



        return isSuccess;
    }
    @GetMapping("/User")
    public List<userModel> getAllUsers()
    {
        List<userModel> opModels = null;
        try
        {
            opModels = service.fetchAllUsers();

        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
        }
        return opModels;
    }

    @GetMapping("/User/Org/{orgId}")
    public List<userModel> getUserByOrgId(@PathVariable String orgId)
    {
        List<userModel> opModel = null;
        if(orgId != null)
        {
            try
            {
                opModel = service.fetchByOrgId(orgId);
            }
            catch(Exception e)
            {
                logger.error(String.valueOf(e));
            }
        }
        else
        {
            logger.error("The Organization Id is Null.. Please Fix It");
        }
        return opModel;
    }


    @GetMapping("/User/{id}")
    public Optional<userModel> getUserById(@PathVariable String id)
    {

        Optional<userModel> opModel = null;
        boolean isSuccess =false;
        if(id!= null)
        {
            try
            {
                opModel = service.fetchById(id);
            }
            catch(Exception e)
            {
                logger.error(String.valueOf(e));
                isSuccess = false;
            }
        }
        else
        {

          isSuccess = false;
        }
        return opModel;
    }

    @DeleteMapping("/User/{id}")
    public boolean deleteUser(@PathVariable String id)
    {
        logger.info("In the Delete Controller of User");
        String opMsg = "";
        boolean isSuccess = false;
        if(id!= null)
        {
            try
            {
                isSuccess = service.delete(id);

            }
            catch(Exception e)
            {
                logger.error(String.valueOf(e));
                isSuccess = false;

            }

        }
        else
        {
            logger.error("Id cannot be null");
            isSuccess = false;
        }

        return isSuccess;
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody userModel request)
    {
        logger.info("In the Login Controller of User");
        boolean isSuccess;
        String isAuthenticated;
        loginModel loginDetails = new loginModel();
        String tempEmailId = request.getUsername();
        String tempPassword = request.getPassword();
        System.out.println(tempEmailId +" & "+tempPassword);
        userModel user = new userModel();
        if(tempEmailId != null && tempPassword != null && !"".equals(tempEmailId) && !"".equals(tempPassword))
        {
            
            isSuccess = service.fetchByEmailAndPassword(tempEmailId,tempPassword);
            System.out.println("The Success parameter in controller is "+isSuccess);
            isAuthenticated = "true";
            user = ur.findByUsernameAndPassword(tempEmailId,tempPassword);
            loginDetails.setUserId(user.getId());
            loginDetails.setOrgId(user.getOrgId());
            loginDetails.setUsrRoleId(user.getUsrRole());
            return user.getId();
        }
        else
        {
            isSuccess = false;
            logger.error("The Login Failed");
            isAuthenticated = "false";
            return null;
        }

    }

    @GetMapping("/User/Organization/{id}")
    public String userOrg(@PathVariable String id)
    {

        String orgId = "";
        Optional<userModel> user = null;
        if(id != null)
        {

                user = service.fetchById(id);
                orgId = user.get().getOrgId();


        }
        else
        {
            logger.error("The Request is Null.");

        }
        return orgId;
    }

    // User Role Area

    @PostMapping("/Role")
    public boolean addRole(@RequestBody userRole request)
    {
        boolean isSuccess = false;
        logger.info("In the Create Controller of User Role");
        if(request != null)
        {
            if(service.getRolebyuserRoleId(request.getUserRoleId()).isEmpty())
            {

                if(service.getuserRoleByrole(request.getUserRole()).isEmpty())
                {
                    isSuccess = service.addUserRole(request);
                }
                else
                {
                    logger.error("The User Role is Already present");
                    isSuccess = false;
                }
            }
            else
            {
                logger.error("The Id is assigned another Role");
                isSuccess = false;
            }
        }
        else
        {
            logger.error("The Request cannot be null...");
            isSuccess = false;
        }

        return isSuccess;
    }

    @GetMapping("/User/Role/{id}")
    public String getUserRole(@PathVariable String id)
    {
        String userRole = "";
        if(id != null)
        {
            System.out.println("The User Role Is"+service.getRoleByUserId(id));
            userRole = service.getRoleByUserId(id);
            if(userRole != null || !userRole.equals("") || !userRole.equals(" "))
            {
                System.out.println("The Role for the Id "+id+" is "+userRole);
                return userRole;
            }
            else
            {
                logger.error("The Id is Not Having Any Role");
                return "The Id is Not Having Any Role";
            }
        }
        else
        {
            logger.error("The Id cannot Be Null...");
            return "The Id cannot Be Null...";
        }
    }
    @GetMapping("/User/Role")
    public List<userRole> getAllRoles()
    {
        List<userRole> allRoles = null;
        try
        {
            allRoles = service.fetchAllUserRoles();

        }
        catch(Exception e)
        {
            logger.error(String.valueOf(e));
        }
        return allRoles;
    }
}

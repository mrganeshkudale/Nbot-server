package com.sensormanagement.organisation.Controllers;


import com.sensormanagement.organisation.Models.organisationModel;
import com.sensormanagement.organisation.Services.orgService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class orgController {
    @Autowired
    orgService service;
    boolean isSuccess = false;
    Logger logger = LoggerFactory.getLogger(orgController.class);

    //Controller To add Organisation / Post Mapping of Organisation
    @PostMapping("/organisation")
    public boolean createOrganisation(@RequestBody organisationModel request)
    {
        LocalDateTime creationTime;
        creationTime = LocalDateTime.now();
        request.setOrgStatus(true);
        request.setCreationTime(creationTime);
        logger.info("In the Create Controller of Organization");
        if (request != null)
        {
            if(service.fetchOrganisationById(request.getOrgId()).isEmpty())
            {

                if(service.fetchOrganisationByName(request.getOrgName()).isEmpty())
                {
                    try
                    {
                        isSuccess = service.addOrganisation(request);

                    }
                    catch (Exception e)
                    {
                        logger.error(String.valueOf(e));
                        isSuccess = false;
                    }
                }
                else
                {
                    logger.error("The Organisation is Already Present with The Same Name...");
                    isSuccess = false;
                }
            }
            else
            {

                logger.error("The Organisation Id is given by you is present with some other organisation");
                isSuccess = false;
            }
        }
        else
        {

            logger.error("The Request is Null.");
            isSuccess = false;
        }
        return isSuccess;
    }


    //Controller To fetch Organisation
    @GetMapping("/organisation/id/{orgId}")
    public Optional<organisationModel> getOrganisationDetails(@PathVariable String orgId)
    {
        Optional<organisationModel> org = null;
        logger.info("In the GetOrganisationDetail Controller of Organization");
        if(orgId != null)
        {

            try
            {
                org = service.fetchOrganisationById(orgId);

            }
            catch(Exception e)
            {
                logger.error(String.valueOf(e));

            }

        }
        else
        {
            logger.error("Organisational Id Should not be Null");
            return Optional.empty();
        }
        return org;
    }


    //Controller To fetch All Organisations it is only for global Admin

    @GetMapping("/organisation")
    public List<organisationModel> getAllOrganisationsDetails()
    {
        List<organisationModel> opOrg = null;
        logger.info("In the  GetAllOrganisationDetails Controller of Organization");
        try
        {
            opOrg = service.fetchAllOrganisations();

        }
        catch(Exception e)
        {
            logger.error(String.valueOf(e));
            return null;
        }
        return opOrg;
    }


    //Controller to fetch All Organisations with the same name

    @GetMapping("/organisation/name/{orgName}")
    public Optional<organisationModel> getOrganisationDetailsByName(@PathVariable String orgName)
    {
        Optional<organisationModel> opOrg = null;
        logger.info("In the  GetOrganisationDetailsByName Controller of Organization");
        try
        {
            opOrg = service.fetchOrganisationByName(orgName);
        }
        catch(Exception e)
        {
            logger.error(String.valueOf(e));
            return null;
        }
        return opOrg;
    }

    //Controller to update Organisation Details not the ID

    @PutMapping("/organisation/{orgId}")
    public boolean updateOrganisationDetails(@PathVariable String orgId, @RequestBody organisationModel request)
    {
        boolean isSuccess = false;
        logger.info("In the  updateOrganisation Controller of Organization");
        if(orgId != null)
        {
            if(request != null)
            {
                try
                {
                    isSuccess = service.updateOrganisationById(orgId,request);
                }
                catch(Exception e)
                {
                    logger.error(String.valueOf(e));
                    isSuccess = false;

                }
            }
            else
            {
                logger.error("The Request Should not be Null...");
                isSuccess = false;
            }
        }
        else
        {
            logger.error("The Organizational Id should not be Null...");
            isSuccess = false;
        }
        return isSuccess;
    }

    //Controller for Deletion of Organisation By ID

    @DeleteMapping("/organisation/{orgId}")
    public boolean deleteOrganisationById(@PathVariable String orgId)
    {
        boolean isSuccess = false;
        logger.info("In the  deleteOrganisation Controller of Organization");
        if(orgId != null)
        {
            if(service.fetchOrganisationById(orgId).isPresent())
            {
                try {
                    isSuccess = service.deleteOrganisationById(orgId);
                } catch (Exception e) {
                    logger.error(String.valueOf(e));
                    isSuccess = false;
                }
            }
            else
            {
                logger.error("The Organisation with these Id is not present");
                isSuccess = false;
            }
        }
        else
        {
            logger.error("Organisational Id should not be null...");
            isSuccess = false;
        }
        return isSuccess;
    }


}

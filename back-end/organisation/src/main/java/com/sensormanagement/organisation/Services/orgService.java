package com.sensormanagement.organisation.Services;

import com.sensormanagement.organisation.Controllers.orgController;
import com.sensormanagement.organisation.Models.organisationModel;
import com.sensormanagement.organisation.Repositories.orgRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class orgService {
    Logger logger = LoggerFactory.getLogger(orgService.class);
    @Autowired
    private orgRepository orgR;

    // To Add New Organisation
    public boolean addOrganisation(organisationModel request)
    {
        logger.info("In the Service Method of Organisation Creation");
        organisationModel org = new organisationModel();
        boolean isSuccessful = false;
       try
       {
           org.setOrgId(request.getOrgId());
           org.setOrgName(request.getOrgName());
           org.setOrgStatus(request.isOrgStatus());
           org.setCreationTime(request.getCreationTime());
           orgR.save(org);
           isSuccessful = true;
           logger.info("The Organisation is Created Successfully");
           return isSuccessful;
       }
       catch (Exception e)
       {
           isSuccessful = false;
           logger.error(String.valueOf(e));
           return isSuccessful = false;
       }

    }

    //To Search All Organisation only for Global Admin

    public List<organisationModel> fetchAllOrganisations()
    {
        List<organisationModel> orgList = null;
        try
        {
            orgList = orgR.findAll();
            logger.info("The Data is Fetched from Repository in the service");
            return orgList;
        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
            return null;
        }

    }


    //To Search A Perticular Organisation By Its id

    public Optional<organisationModel> fetchOrganisationById(String orgId)
    {
        Optional<organisationModel> org = null;
        try
        {
            org = orgR.findById(orgId);
            logger.info("The Data is Fetched from Repository in the service");
            return org;

        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
            return null;
        }
    }

    //To Search A Perticular Organisation By Its Name


    public Optional<organisationModel> fetchOrganisationByName(String orgName)
    {
        Optional<organisationModel> org = null;
        try
        {
            org = orgR.findByOrgName(orgName);
            logger.info("The Data is Fetched from Repository in the service");
            return org;
        }
        catch (Exception e)
        {
            System.out.println(e);
            return org;
        }

    }


    //To Delete A Particular Organisation By Its Id

    public boolean deleteOrganisationById(String orgId)
    {
        boolean deleted = false;
        try
        {
            orgR.deleteById(orgId);
            deleted = true;
            return deleted;
        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
            deleted = false;
            return deleted;
        }

    }


    //To Delete A Particular Organisation By Its Name

    public boolean deleteOrganisationByName(String orgName)
    {
        boolean deleted = false;
        logger.info("In the organisation deletion Service.");
        try
        {
            deleted = orgR.deleteByOrgName(orgName);
            logger.info("The Organisation is Deleted");
            return deleted;
        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
            deleted = false;
            return deleted;
        }

    }


    //To Update A Particular Organisational Details by Its Id

    public boolean updateOrganisationById(String orgId,organisationModel request)
    {
        Optional<organisationModel> org = null;
        org = fetchOrganisationById(orgId);
        organisationModel orgUpdate = new organisationModel();
        boolean isSuccess = false;
        logger.info("In the organisation updating Service.");
        if(org.isPresent())
        {
            try
            {
                orgUpdate = org.get();
                request.setOrgId(orgId);
                request.setOrgName(request.getOrgName());
                request.setOrgStatus(request.isOrgStatus());
                request.setCreationTime(orgUpdate.getCreationTime());
                orgR.save(request);
                logger.info("The Organisation is Updated");
                isSuccess = true;
                return isSuccess;
            }
            catch(Exception e)
            {
                logger.error(String.valueOf(e));
                isSuccess = false;
                return isSuccess;
            }
        }
        else
        {
            logger.error("Organisation with this Id isn't present");
            return false;
        }


    }


}

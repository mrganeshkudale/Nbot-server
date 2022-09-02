package com.sensormanagement.sensor.Controllers;

import com.sensormanagement.sensor.Models.sensorModel;
import com.sensormanagement.sensor.Models.userModel;
import com.sensormanagement.sensor.Services.sensorServices;
import lombok.SneakyThrows;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class controller {
    RestTemplate restTemplate = new RestTemplate();
    Logger logger = LoggerFactory.getLogger(controller.class);
    @Autowired
    sensorServices service;
    @SneakyThrows
    @PostMapping("/Sensor")
    public boolean createSensor(@RequestBody sensorModel request)  {

        LocalDateTime creationTime;
        creationTime = LocalDateTime.now();

        request.setStatus(true);

        request.setCreationTime(creationTime);

        String url = "http://localhost:8081/User/"+request.getUserId();

        boolean success = false;
        logger.trace("In The Create Sensor Method");
        if(request!=null)
        {


            if (restTemplate.getForObject(url, userModel.class) != null)
            {

                if(service.fetchSensorById(request.getId()).isEmpty())
                {


                    try {
                        success = service.createSensor(request);
                    } catch (Exception e) {
                        logger.error(String.valueOf(e));
                        success = false;

                    }
                }
                else {
                    logger.error("The Sensor is Already present with the Id.");
                    success = false;
                }
            }
            else {
                logger.error("The User you want to add from is not found in the database. Try with different User.");
                success = false;
            }


        }
        else
        {
            logger.error("The Request Cannot Be Null.");
            success = false;
        }
        System.out.println(success);
        return success;


    }


    @GetMapping("/Sensor")
    public List<sensorModel> getAllSensors()
    {
        List<sensorModel> opSensor = null;
        try
        {
            opSensor = service.fetchAllSensors();

        }
        catch (Exception e)
        {
            logger.error(String.valueOf(e));
        }
        return opSensor;
    }

    @GetMapping("/Sensor/User/{userId}")
    public List<sensorModel> getAllSensorsByUserId(@PathVariable String userId)
    {
        List<sensorModel> opSensor = null;
        if(userId != null)
        {
            try
            {
                opSensor = service.fetchAllSensorsByUserId(userId);

            }
            catch(Exception e)
            {
                logger.error(String.valueOf(e));

            }
        }
        else
        {
            logger.error("The UserId Cannot Be null in Request");
        }
        logger.error("The Data will be sent to the front end soon");
        return opSensor;
    }



    @GetMapping("/Sensor/{id}")
    public Optional<sensorModel> getSensorById(@PathVariable String id)
    {
        Optional<sensorModel> opSensor = null;
        if(id != null)
        {
            try
            {
                opSensor = service.fetchSensorById(id);

            }
            catch (Exception e)
            {
                logger.error(String.valueOf(e));
            }

        }
        else
        {
            logger.error("The Id CAnnot Be null....");
        }
        return opSensor;
    }
    @GetMapping("/Sensor/Organization/{orgId}")
    public List<sensorModel> getSensorByOrgId(@PathVariable String orgId)
    {
        List<sensorModel> opSensor = null;
        if(orgId != null)
        {
            try
            {
                opSensor = service.fetchSensorByOrgId(orgId);

            }
            catch (Exception e)
            {
                logger.error(String.valueOf(e));
            }

        }
        else
        {
            logger.error("The Id CAnnot Be null....");
        }
        return opSensor;
    }
    @PutMapping("/Sensor/{id}")
    public boolean updateSensor(@PathVariable String id,@RequestBody sensorModel request)
    {


        boolean isSuccess = false;
        if(id != null)
        {
            try
            {
                isSuccess = service.updateSensor(id,request);

            }
            catch (Exception e)
            {
                logger.error(String.valueOf(e));
                isSuccess = false;

            }
        }
        else
        {
            logger.error("The Id cannot Be Null");

            isSuccess = false;
        }
        return isSuccess;
    }

    @DeleteMapping("/Sensor/{id}")
    public boolean deleteSensor(@PathVariable String id)
    {
        boolean isSuccess = false;
        String opMsg = "";
        if(id != null)
        {
            if(!service.fetchSensorById(id).isEmpty() )
            {

                try
                {
                    isSuccess = service.deleteSensor(id);

                }
                catch (Exception e)
                {
                    logger.error(String.valueOf(e));
                    isSuccess = false;
                }
            }
            else
            {
                logger.error("The Sensor cannot Found");
                isSuccess = false;
            }


        }
        else
        {
            logger.error("The Id cannot be Null");
            isSuccess = false;
        }
        return isSuccess;
    }
}

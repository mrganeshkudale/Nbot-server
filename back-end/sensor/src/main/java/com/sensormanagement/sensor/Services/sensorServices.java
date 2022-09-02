package com.sensormanagement.sensor.Services;

import com.sensormanagement.sensor.Models.sensorModel;
import com.sensormanagement.sensor.Repository.sensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class sensorServices {
    @Autowired
    sensorRepository sr;

    public boolean createSensor(sensorModel request)
    {
        sensorModel sensor = new sensorModel();
        boolean success = false;
        try
        {
            sensor.setId(request.getId());
            sensor.setUserId(request.getUserId());
            sensor.setCreationTime(request.getCreationTime());
            sensor.setOrgId(request.getOrgId());
            sensor.setSensorName(request.getSensorName());
            sensor.setLicenseId(request.getLicenseId());
            sensor.setStatus(true);
            sensor.setThreshold(request.getThreshold());
            sr.save(sensor);
            success = true;
        }
        catch (Exception e)
        {
            success = false;
        }
        return success;
    }

    public List<sensorModel> fetchAllSensors()
    {
        List<sensorModel> opSensor = null;
        try
        {
            opSensor = sr.findAll();

        }
        catch (Exception e)
        {
            System.out.println(e);
        }
        return opSensor;
    }
    public Optional<sensorModel> fetchSensorById(String id) {
        Optional<sensorModel> opSensor = null;
        try
        {
            opSensor = sr.findById(id);
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
        return opSensor;
    }

    public List<sensorModel> fetchAllSensorsByUserId(String userId)
    {
        List<sensorModel> opSensor = null;
        try
        {
            opSensor = sr.findByUserId(userId);
            System.out.println("The Data will be sent to the front end soon");
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
        return opSensor;
    }

    public boolean deleteSensor(String id) {
        String opMsg = "";
        boolean isSuccess =false;
        try
        {
            sr.deleteById(id);
            isSuccess = true;

        }
        catch (Exception e)
        {
            isSuccess = false;

        }
        return isSuccess;
    }


    public boolean updateSensor(String id,sensorModel request) {
        Optional<sensorModel> sensor = null;
        sensor = fetchSensorById(id);
        boolean success =false;
        sensorModel Usensor = new sensorModel();
        if (sensor.isPresent())
        {
            try
            {
                Usensor = sensor.get();
                request.setId(id);
                request.setUserId(Usensor.getUserId());
                request.setSensorName(Usensor.getSensorName());
                request.setOrgId(Usensor.getOrgId());
                request.setStatus(request.isStatus());
                request.setThreshold(request.getThreshold());
                request.setCreationTime(Usensor.getCreationTime());
                request.setLicenseId(Usensor.getLicenseId());
                sr.save(request);
                success = true;
            }
            catch (Exception e)
            {

            }
        }
        else
        {
            success = false;
        }
        return success;
    }

    public List<sensorModel> fetchSensorByOrgId(String orgId) {
        List<sensorModel> opSensor = null;
        try
        {
            opSensor = sr.findAllByOrgId(orgId);
            System.out.println("The Data will be sent to the front end soon");
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
        return opSensor;
    }
}

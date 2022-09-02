package com.sensormanagement.sensor.controllerTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sensormanagement.sensor.Models.sensorModel;
import com.sensormanagement.sensor.Repository.sensorRepository;
import com.sensormanagement.sensor.Services.sensorServices;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class controllerTest {
    @MockBean
    sensorRepository repo;
    @Autowired
    sensorServices service;
    @Autowired
    MockMvc mvc;
    @Autowired
    ObjectMapper mapper;

    void createSensorTest() throws Exception
    {
        RequestBuilder request= MockMvcRequestBuilders.post("/Sensor").
                contentType(MediaType.APPLICATION_JSON).
                content("{\n \"id\":\"1\",\n \"userId\":\"2f4c8945-c767-4b31-aadf-b8b42ea606d4\",\n \"sensorName\":\"72d8dc45-a698-40bb-90fc-d150e2e2707d5644\",\n \"orgId\":\"72d8dc45-a698-40bb-90fc-d150e2e2707d5644\",\n \"status\":\\true\",\n \"threshold\":\"72d8dc45-a698-40bb-90fc-d150e2e2707d5644\",\n \"licenseId\":\"72d8dc45-a698-40bb-90fc-d150e2e2707d5644\"}");
        MvcResult result = mvc.perform(request).andExpect(status().isOk()).andReturn();
        assertEquals(mapper.writeValueAsString(true),result.getResponse().getContentAsString());
    }
    @Test
    void getAllSensors()
    {

        when(repo.findAll()).thenReturn(Stream.of(new sensorModel("1","poiuytrshjk","Pranav","72d8dc45-a698-40bb-90fc-d150e2e2707d5644",true,"72d8dc45-a698-40bb-90fc-d150e2e2707d5644", LocalDateTime.now(),"72d8dc45-a698-40bb-90fc-d150e2e2707d5644"),
                new sensorModel("2","poiupoiugf8yiytrshjk","Pranav Sanjay","72d8dc987645-a698-40bb-90fc-d150e2e2707d5644",true,"72d8dc45-a698-40bb-90fc-d150e2e2707d98765644", LocalDateTime.now(),"72d8dc45-a698-40bb-90f987c-d150e2e2707d5644")).collect(Collectors.toList()));
        assertEquals(2,service.fetchAllSensors().size());
    }

    @Test
    void getSensorById()
    {
        sensorModel sensor = new sensorModel("1","poiuytrshjk","Pranav","72d8dc45-a698-40bb-90fc-d150e2e2707d5644",true,"72d8dc45-a698-40bb-90fc-d150e2e2707d5644", LocalDateTime.now(),"72d8dc45-a698-40bb-90fc-d150e2e2707d5644");
        Optional<sensorModel> request = Optional.of(sensor);
        Optional<sensorModel> expected = Optional.of(sensor);
        when(repo.findById("1")).thenReturn(request);
        assertEquals(expected,service.fetchSensorById("1"));
    }

    @Test
    void deleteSensor() throws Exception
    {
        RequestBuilder request = MockMvcRequestBuilders.delete("/Sensor/1");
        MvcResult mvcResult = mvc.perform(request).andExpect(status().isOk()).andReturn();
        assertEquals(mapper.writeValueAsString(false),mvcResult.getResponse().getContentAsString());
    }

}

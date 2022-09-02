package com.sensormanagement.organisation.controllerTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sensormanagement.organisation.Models.organisationModel;
import com.sensormanagement.organisation.Repositories.orgRepository;
import com.sensormanagement.organisation.Services.orgService;
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
    orgRepository repo;
    @Autowired
    MockMvc mvc;
    @Autowired
    ObjectMapper mapper;
    @Autowired
    orgService service;



    @Test
    void createOrg() throws Exception
    {
        RequestBuilder request = MockMvcRequestBuilders.post("/organisation").
                contentType(MediaType.APPLICATION_JSON).
                content("{\n \"orgId\":\"1\",\n \"orgName\":\"Thermal Sensor\"\n }");
        MvcResult result = mvc.perform(request).andExpect(status().isOk()).andReturn();
        assertEquals(mapper.writeValueAsString(true),result.getResponse().getContentAsString());
    }

    @Test
    void getAllOrganisations() throws Exception
    {
        when(repo.findAll()).thenReturn(Stream.of(new organisationModel("1","PC1",true, LocalDateTime.now())
                ,new organisationModel("2","odirwe",true,LocalDateTime.now())).collect(Collectors.toList()));
        assertEquals(2,service.fetchAllOrganisations().size());
    }

    @Test
    void getOrganisationById() {
        organisationModel user = new organisationModel("1","skjahdj",true,LocalDateTime.now());
        Optional<organisationModel> request = Optional.of(user);
        Optional<organisationModel> expected = Optional.of(user);
        when(repo.findById("1")).thenReturn(request);
        assertEquals(expected, service.fetchOrganisationById("1"));
    }

    @Test
    void deleteOrganisation() throws Exception {

        RequestBuilder request = MockMvcRequestBuilders.delete("/organisation/1");
        MvcResult mvcResult = mvc.perform(request).andExpect(status().isOk()).andReturn();
        assertEquals(mapper.writeValueAsString(false),mvcResult.getResponse().getContentAsString());
    }


}

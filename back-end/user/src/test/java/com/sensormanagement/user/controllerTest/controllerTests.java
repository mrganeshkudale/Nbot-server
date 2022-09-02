package com.sensormanagement.user.controllerTest;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sensormanagement.user.Models.userModel;
import com.sensormanagement.user.Repository.userRepository;
import com.sensormanagement.user.Services.userService;
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
public class controllerTests {
    @Autowired
    MockMvc mvc;
    @Autowired
    ObjectMapper   mapper;
    @MockBean
    userRepository repo;
    @Autowired
    userService service;




    @Test
    void createUser() throws Exception
    {
        RequestBuilder request = MockMvcRequestBuilders.post("/User").
                                    contentType(MediaType.APPLICATION_JSON).
                                    content("{\n \"id\":\"1\",\n \"name\":\"Pranav Chinchwade\",\n \"username\":\"chinchwadepranav71@gmail.com\",\n \"password\":\"Pranav@123\",\n \"Status\":\"Online\",\n \"usrRole\":\"1\"\n}");
        MvcResult mvcResult = mvc.perform(request).andExpect(status().isOk()).andReturn();
        assertEquals(mapper.writeValueAsString(1),mvcResult.getResponse().getContentAsString());
    }

    @Test
    void getAllUsers()
    {

        when(repo.findAll()).thenReturn(Stream.of(new userModel("1","poiuytrshjk","Pranav","chinchwadepranav71@gmail.com","Pranav@123","Online",LocalDateTime.now(),"1"),
                new userModel("1","kuyfvjiuyf","Pranav","chinchwadepranav71@gmail.com","Pranav@123","Online",LocalDateTime.now(),"1")).collect(Collectors.toList()));
        assertEquals(2,service.fetchAllUsers().size());
    }
    @Test
    void getUserById() {
        userModel user = new userModel("1","poiuytrshjk","Pranav","chinchwadepranav71@gmail.com","Pranav@123","Online",LocalDateTime.now(),"1");
        Optional<userModel> request = Optional.of(user);
        Optional<userModel> expected = Optional.of(user);
        when(repo.findById("1")).thenReturn(request);
        assertEquals(expected, service.fetchById("1"));

    }

    @Test
    void deleteUser() throws Exception
    {
        RequestBuilder request = MockMvcRequestBuilders.delete("/User/1");
        MvcResult mvcResult = mvc.perform(request).andExpect(status().isOk()).andReturn();
        assertEquals(mapper.writeValueAsString(true),mvcResult.getResponse().getContentAsString());
    }


}

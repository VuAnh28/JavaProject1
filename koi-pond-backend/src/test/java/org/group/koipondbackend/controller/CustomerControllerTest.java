package org.group.koipondbackend.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.Arrays;
import java.util.Optional;
import org.group.koipondbackend.dto.CustomerDTO;
import org.group.koipondbackend.exception.ResourceNotFoundException;
import org.group.koipondbackend.service.impl.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CustomerControllerTest {

    private MockMvc mockMvc;

    @Mock
    private CustomerService customerService;

    @InjectMocks
    private CustomerController customerController;

    private ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(customerController).build();
    }

    @Test
    public void testCreateCustomer() throws Exception {
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setFullName("John Doe");

        when(customerService.create(any(CustomerDTO.class))).thenReturn(customerDTO);

        mockMvc.perform(post("/api/customers")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(customerDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.fullName").value("John Doe"));
    }

    @Test
    public void testGetCustomerById() throws Exception {
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setId(1L);
        customerDTO.setFullName("John Doe");

        when(customerService.findById(anyLong())).thenReturn(Optional.of(customerDTO));

        mockMvc.perform(get("/api/customers/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.fullName").value("John Doe"));
    }

    @Test
    public void testGetCustomerById_NotFound() throws Exception {
        when(customerService.findById(anyLong())).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/customers/1"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testGetAllCustomers() throws Exception {
        CustomerDTO customer1 = new CustomerDTO();
        customer1.setFullName("John Doe");

        CustomerDTO customer2 = new CustomerDTO();
        customer2.setFullName("Jane Doe");

        when(customerService.findAll()).thenReturn(Arrays.asList(customer1, customer2));

        mockMvc.perform(get("/api/customers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].fullName").value("John Doe"))
                .andExpect(jsonPath("$[1].fullName").value("Jane Doe"));
    }

    @Test
    public void testUpdateCustomer() throws Exception {
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setId(1L);
        customerDTO.setFullName("John Doe");

        when(customerService.update(any(CustomerDTO.class))).thenReturn(customerDTO);

        mockMvc.perform(put("/api/customers/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(customerDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.fullName").value("John Doe"));
    }

    @Test
    public void testDeleteCustomer() throws Exception {
        mockMvc.perform(delete("/api/customers/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Customer deleted successfully"));
    }
}

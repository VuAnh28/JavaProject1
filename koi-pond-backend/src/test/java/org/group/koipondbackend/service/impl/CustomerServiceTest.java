package org.group.koipondbackend.service.impl;

import org.group.koipondbackend.dto.CustomerDTO;
import org.group.koipondbackend.entity.Customer;
import org.group.koipondbackend.mapper.CustomerMapper;
import org.group.koipondbackend.repository.CustomerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private CustomerMapper customerMapper;

    @InjectMocks
    private CustomerService customerService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCustomerServiceCreation() {
        assertNotNull(customerService);
    }

    @Test
    public void testFindAllCustomers() {
        customerService.findAll();
        verify(customerRepository).findAll();
    }

    @Test
    public void testFindCustomerById() {
        Long customerId = 1L;
        customerService.findById(customerId);
        verify(customerRepository).findById(customerId);
    }

    @Test
    public void testDeleteCustomer() {
        Long customerId = 1L;
        customerService.delete(customerId);
    }

    @Test
    public void testCreateCustomer() {
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setFullName("John Doe");

        Customer customer = new Customer();
        customer.setFullName("John Doe");

        when(customerMapper.toEntity(customerDTO)).thenReturn(customer);
        when(customerRepository.save(customer)).thenReturn(customer);

        customerService.create(customerDTO);

        verify(customerMapper).toEntity(customerDTO);
        verify(customerRepository).save(customer);
    }
}

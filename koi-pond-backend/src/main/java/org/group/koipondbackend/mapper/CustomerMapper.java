package org.group.koipondbackend.mapper;

import org.group.koipondbackend.dto.CustomerDTO;
import org.group.koipondbackend.entity.Customer;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class CustomerMapper extends BaseMapper<Customer, CustomerDTO> {
    @Autowired
    private GenericMapper genericMapper;

    @Override
    public CustomerDTO toDto(Customer entity) {
        if (entity == null) {
            return null;
        }

        return (CustomerDTO) genericMapper.toDto(entity);
    }

    @Override
    public Customer toEntity(CustomerDTO dto) {
        if (dto == null) {
            return null;
        }

        return (Customer) genericMapper.toEntity(dto);
    }
}

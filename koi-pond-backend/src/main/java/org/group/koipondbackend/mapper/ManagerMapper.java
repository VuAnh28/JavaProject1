package org.group.koipondbackend.mapper;

import org.group.koipondbackend.dto.ManagerDTO;
import org.group.koipondbackend.entity.Manager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class ManagerMapper extends BaseMapper<Manager, ManagerDTO>{

    @Qualifier("managerMapper")
    @Autowired
    private GenericMapper genericMapper;
    @Override
    public ManagerDTO toDto(Manager entity) {
        if (entity == null) {
            return null;
        }

        return (ManagerDTO) genericMapper.toDto(entity);
    }

    @Override
    public Manager toEntity(ManagerDTO dto) {
        if (dto == null) {
            return null;
        }

        return (Manager) genericMapper.toEntity(dto);
    }
}

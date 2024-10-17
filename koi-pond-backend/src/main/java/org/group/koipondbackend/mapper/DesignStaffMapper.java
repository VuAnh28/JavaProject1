package org.group.koipondbackend.mapper;

import org.group.koipondbackend.dto.DesignStaffDTO;
import org.group.koipondbackend.entity.DesignStaff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class DesignStaffMapper extends BaseMapper<DesignStaff, DesignStaffDTO> {

    @Qualifier("designStaffMapper")
    @Autowired
    private GenericMapper genericMapper;
    @Override
    public DesignStaffDTO toDto(DesignStaff entity) {
        if (entity == null) {
            return null;
        }

        return (DesignStaffDTO) genericMapper.toDto(entity);
    }

    @Override
    public DesignStaff toEntity(DesignStaffDTO dto) {
        if (dto == null) {
            return null;
        }

        return (DesignStaff) genericMapper.toEntity(dto);
    }
}

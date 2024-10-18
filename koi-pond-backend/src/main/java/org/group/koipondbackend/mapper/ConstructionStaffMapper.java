package org.group.koipondbackend.mapper;

import org.group.koipondbackend.dto.ConstructionStaffDTO;
import org.group.koipondbackend.entity.ConstructionStaff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class ConstructionStaffMapper extends BaseMapper<ConstructionStaff, ConstructionStaffDTO> {


    @Qualifier("constructionStaffMapper")
    @Autowired
    private GenericMapper genericMapper;


    @Override
    public ConstructionStaffDTO toDto(ConstructionStaff entity) {
        if (entity == null) {
            return null;
        }

        return (ConstructionStaffDTO) genericMapper.toDto(entity);
    }

    @Override
    public ConstructionStaff toEntity(ConstructionStaffDTO dto) {
        if (dto == null) {
            return null;
        }

        return (ConstructionStaff) genericMapper.toEntity(dto);
    }
}

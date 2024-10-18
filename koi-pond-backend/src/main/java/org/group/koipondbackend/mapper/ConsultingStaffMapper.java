package org.group.koipondbackend.mapper;

import org.group.koipondbackend.dto.ConsultingStaffDTO;
import org.group.koipondbackend.entity.ConsultingStaff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class ConsultingStaffMapper extends BaseMapper<ConsultingStaff, ConsultingStaffDTO> {
    @Qualifier("consultingStaffMapper")
    @Autowired
    private GenericMapper genericMapper;
    @Override
    public ConsultingStaffDTO toDto(ConsultingStaff entity) {
        if (entity == null) {
            return null;
        }
        return (ConsultingStaffDTO) genericMapper.toDto(entity);
    }

    @Override
    public ConsultingStaff toEntity(ConsultingStaffDTO dto) {
        if (dto == null) {
            return null;
        }
        return (ConsultingStaff) genericMapper.toEntity(dto);
    }
}

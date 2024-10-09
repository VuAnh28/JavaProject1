package org.group.koipondbackend.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("CONSULTING")
@Data
@NoArgsConstructor
public class ConsultingStaff extends Staff {
    private String specialization;
}

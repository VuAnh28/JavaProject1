package org.group.koipondbackend.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@DiscriminatorValue("CONSULTING")
@Data
@NoArgsConstructor
public class ConsultingStaff extends Staff {
    private String specialization;
}

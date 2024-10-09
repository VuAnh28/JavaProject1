package org.group.koipondbackend.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("DESIGN")
@Data
@NoArgsConstructor
public class DesignStaff extends Staff {
    private String designSoftware;
}
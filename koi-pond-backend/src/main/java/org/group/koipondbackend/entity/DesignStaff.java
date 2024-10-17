package org.group.koipondbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@DiscriminatorValue("DESIGN")
@Data
@NoArgsConstructor
public class DesignStaff extends Staff {

    @Column(name = "design_software")
    private String designSoftware;
}
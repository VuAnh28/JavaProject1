package org.group.koipondbackend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@DiscriminatorValue("MANAGER")
@Data
@NoArgsConstructor
public class Manager extends Staff {

    @Column(name = "managerial_level")
    private String managerialLevel;
}
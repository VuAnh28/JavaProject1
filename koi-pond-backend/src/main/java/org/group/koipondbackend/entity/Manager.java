package org.group.koipondbackend.entity;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("MANAGER")
@Data
@NoArgsConstructor
public class Manager extends Staff {
    private String managerialLevel;
}
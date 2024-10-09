package org.group.koipondbackend.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("CONSTRUCTION")
@Data
@NoArgsConstructor
public class ConstructionStaff extends Staff {
    private String constructionSkills;
}
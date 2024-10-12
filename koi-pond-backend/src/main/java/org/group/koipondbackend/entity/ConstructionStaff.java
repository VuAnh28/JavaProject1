package org.group.koipondbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Entity
@DiscriminatorValue("CONSTRUCTION")
@Data
@NoArgsConstructor
public class ConstructionStaff extends Staff {

    @Column(name = "construction_skills")
    private String constructionSkills;
}
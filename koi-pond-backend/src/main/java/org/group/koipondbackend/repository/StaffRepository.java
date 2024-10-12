package org.group.koipondbackend.repository;

import org.group.koipondbackend.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository<T extends Staff> extends JpaRepository<T, Long> {
    List<T> findByEmployeeId(String employeeId);
}

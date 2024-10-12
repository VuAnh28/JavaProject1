package org.group.koipondbackend.repository;

import org.group.koipondbackend.entity.Customer;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends UserRepository<Customer> {
}

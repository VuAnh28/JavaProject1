package org.group.koipondbackend.service;

import jakarta.annotation.PostConstruct;
import org.group.koipondbackend.model.User;
import org.group.koipondbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void checkDataInitialization() {
        long userCount = userRepository.count();
        if (userCount > 0) {
            System.out.println("Data initialized successfully. User count: " + userCount);
        } else {
            System.out.println("Warning: No users found. Data initialization might have failed.");
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

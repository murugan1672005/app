package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Users;

public interface UsersRepo extends JpaRepository<Users,Integer> {
    Optional<Users>findByEmail(String email);
}

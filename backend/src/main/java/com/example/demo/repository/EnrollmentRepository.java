package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Courses;
import com.example.demo.entity.Enrollment;
import com.example.demo.entity.Users;

public interface EnrollmentRepository extends JpaRepository<Enrollment,Integer> {
    Optional<Enrollment> findByUserAndCourse(Users user,Courses course);
}

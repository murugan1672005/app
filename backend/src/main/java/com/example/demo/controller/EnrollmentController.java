package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.EnrollmentService;

@RestController
public class EnrollmentController {
    @Autowired
    private EnrollmentService enrollmentService;
    @PostMapping("/users/enroll/courses")
    public ResponseEntity<String> enrollUser(@RequestParam Integer userId, @RequestParam Integer courseId) {
        String result = enrollmentService.enrollUserInCourse(userId, courseId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
}

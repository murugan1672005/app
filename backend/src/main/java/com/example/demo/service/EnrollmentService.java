package com.example.demo.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Courses;
import com.example.demo.entity.Enrollment;
import com.example.demo.entity.Users;
import com.example.demo.repository.CoursesRepo;
import com.example.demo.repository.EnrollmentRepository;
import com.example.demo.repository.UsersRepo;

@Service
public class EnrollmentService {
    
    @Autowired
    private UsersRepo usersRepository;

    @Autowired
    private CoursesRepo coursesRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    public String enrollUserInCourse(Integer userId, Integer courseId) {
        Optional<Users> optionalUser = usersRepository.findById(userId);
        Optional<Courses> optionalCourse = coursesRepository.findById(courseId);

        if (optionalUser.isPresent() && optionalCourse.isPresent()) {
            Users user = optionalUser.get();
            Courses course = optionalCourse.get();
            Optional<Enrollment> existingEnrollment = enrollmentRepository.findByUserAndCourse(user, course);
            if (existingEnrollment.isPresent()) {
                return "User is already enrolled in this course.";
            }

            if (user.getRole().equals("USER")) {
                if (course.getEnrolled() < course.getSeats()) {
                    Enrollment enrollment = new Enrollment();
                    enrollment.setUser(user);
                    enrollment.setCourse(course);
                    enrollment.setEnrollmentDate(new Date());

                    course.setEnrolled(course.getEnrolled() + 1);

                    enrollmentRepository.save(enrollment);
                    coursesRepository.save(course);

                    return "User enrolled successfully!";
                } else {
                    return "Course is full!";
                }
            } else {
                return "Only users with the USER role can enroll in courses.";
            }
        } else {
            return "User or Course not found.";
        }
    }
}

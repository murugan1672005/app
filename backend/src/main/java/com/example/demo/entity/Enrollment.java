package com.example.demo.entity;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.GenerationType;;
@Entity
@Table(name="enrollments")
@Data
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
     @JoinColumn(name = "user_id")
    private Users user;
    @ManyToOne
    @JoinColumn(name="course_id")
    private Courses course;
    private Date enrollmentDate;
}

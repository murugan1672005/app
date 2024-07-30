import React from 'react';


import CourseHeader from './CourseHeader/CourseHeader';
import CourseBody from './CourseBody/CourseBody';
import Footer from '../Home/Footer/Footer'
import './Courses.css';

const Courses = () => {
    return (
        
            <div>
                <CourseHeader />
            <CourseBody />\
            <Footer/>
            </div>
        
    );
};

export default Courses;

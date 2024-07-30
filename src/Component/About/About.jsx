import React from 'react';
import './About.css'; // Ensure this CSS file exists
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faChartLine, faCalendarAlt, faBrain } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const teamMembers = [
    { name: 'Thirumurugan', role: 'CEO' },
    { name: 'Sujan D S', role: 'Marketing Manager' },
    { name: 'Sanjay S', role: 'Lead Designer' },
  ];

  return (
    <>
    
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Discover who we are and what drives us.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At E-Learn, we are dedicated to providing top-notch solutions that enhance learning experiences worldwide. Our mission is to empower individuals and organizations through innovative and accessible e-learning tools.
            </p>
            <div className="features-container">
              <div className="feature-box">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCogs} />
                </div>
                <h3 className="feature-title">Activities</h3>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="feature-title">Development</h3>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <h3 className="feature-title">Planning</h3>
              </div>
              <div className="feature-box">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <h3 className="feature-title">Strategy</h3>
              </div>
            </div>
            <h2>Users</h2>
            <AvatarGroup className='ava' max={5}>
              <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&pid=Api&rs=1&c=1&qlt=95&w=72&h=108" />
              <Avatar alt="Travis Howard" src="https://tse1.mm.bing.net/th?id=OIP.Rp9RK3Wm49_KJ9P_DnhLBAHaFI&pid=Api&rs=1&c=1&qlt=95&w=168&h=116" />
              <Avatar alt="Cindy Baker" src="https://tse1.mm.bing.net/th?id=OIP.Js3-41xtOqJIpXV9hbOoAAHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117" />
              <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            {/* <h2>Our Vision</h2>
            <p>
              We envision a world where education is accessible to everyone, regardless of their background. We aim to bridge gaps and make learning a seamless experience for all.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li><strong>Innovation:</strong> Continuously striving to improve and bring new ideas to life.</li>
              <li><strong>Integrity:</strong> Upholding the highest standards of honesty and transparency.</li>
              <li><strong>Customer-Centricity:</strong> Putting our users at the center of everything we do.</li>
              <li><strong>Collaboration:</strong> Working together to achieve common goals and foster a positive environment.</li> 
            </ul>*/}
          </div>
          <div className="about-image">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_1280.jpg" // Replace with your image URL
              alt="Team working together"
            />
          </div>
        </div>
        <div className="team-container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <h3>{member.name}</h3>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
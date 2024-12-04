import React from 'react';
import Header from '../Home/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faChartLine, faCalendarAlt, faBrain } from '@fortawesome/free-solid-svg-icons';
import { Avatar, AvatarGroup } from '@mui/material';

const About = () => {
  const teamMembers = [
    { name: 'Thirumurugan', role: 'CEO' },
    { name: 'Sujan D S', role: 'Marketing Manager' },
    { name: 'Sanjay S', role: 'Lead Designer' },
  ];

  return (
    <>
      <Header />
      <div className="bg-white py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="text-lg text-gray-600">Discover who we are and what drives us.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At E-Learn, we are dedicated to providing top-notch solutions that enhance learning experiences worldwide. Our mission is to empower individuals and organizations through innovative and accessible e-learning tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
                <FontAwesomeIcon icon={faCogs} className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-medium">Activities</h3>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
                <FontAwesomeIcon icon={faChartLine} className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-medium">Development</h3>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-medium">Planning</h3>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
                <FontAwesomeIcon icon={faBrain} className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-medium">Strategy</h3>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Users</h2>
            <AvatarGroup max={5} className="mb-6">
              <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&pid=Api&rs=1&c=1&qlt=95&w=72&h=108" />
              <Avatar alt="Travis Howard" src="https://tse1.mm.bing.net/th?id=OIP.Rp9RK3Wm49_KJ9P_DnhLBAHaFI&pid=Api&rs=1&c=1&qlt=95&w=168&h=116" />
              <Avatar alt="Cindy Baker" src="https://tse1.mm.bing.net/th?id=OIP.Js3-41xtOqJIpXV9hbOoAAHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117" />
              <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_1280.jpg"
              alt="Team working together"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div className="text-center" key={index}>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container maxWidth="lg">
        <div className="text-center mb-6">
          <Typography variant="h6" className="font-bold text-xl">
            Top companies choose <span className="text-blue-400">Jackson</span> Business to build in-demand career skills.
          </Typography>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:justify-between text-center lg:text-left mb-6">
          <div className="mb-4 lg:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Jackson Business</a></li>
              <li><a href="#" className="hover:underline">Teach on Jackson</a></li>
              <li><a href="#" className="hover:underline">Get the app</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          
          <div className="mb-4 lg:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Help and Support</a></li>
              <li><a href="#" className="hover:underline">Affiliate</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Cookies Settings</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Accessibility statement</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="text-blue-400 hover:text-blue-500"><Facebook /></a>
          <a href="https://x.com/?lang=en-in&mx=2" className="text-blue-400 hover:text-blue-500"><Twitter /></a>
          <a href="https://www.instagram.com/?hl=en" className="text-pink-400 hover:text-pink-500"><Instagram /></a>
          <a href="https://in.linkedin.com/" className="text-blue-600 hover:text-blue-700"><LinkedIn /></a>
        </div>
        
        <Typography variant="body2" className="text-center text-gray-400">
          &copy; 2024 Jackson Academy. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

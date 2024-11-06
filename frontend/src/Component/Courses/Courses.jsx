import React from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CoursesList';
import { Container, Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSpring, animated } from 'react-spring';
import './Courses.css';

const Courses = () => {
  const footerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <div className="page-wrapper">
      <Container className="courses-container">
        <CourseFilter />
        <CourseList />
      </Container>
      <animated.div style={footerAnimation}>
        <Box component="footer" className="footer">
          <Container>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4} className="footer-section">
                <Typography variant="h6" align="center" gutterBottom className="footer-title">
                  Quick Links
                </Typography>
                <Typography variant="body2" align="center" className="footer-links">
                  <Link href="#" color="inherit" underline="hover">Home</Link>
                  <br />
                  <Link href="#" color="inherit" underline="hover">Courses</Link>
                  <br />
                  <Link href="#" color="inherit" underline="hover">About Us</Link>
                  <br />
                  <Link href="#" color="inherit" underline="hover">Contact</Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className="footer-section">
                <Typography variant="h6" align="center" gutterBottom className="footer-title">
                  Follow Us
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <IconButton className="social-icon" href="https://www.facebook.com" target="_blank">
                      <FacebookIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton className="social-icon" href="https://www.twitter.com" target="_blank">
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton className="social-icon" href="https://www.instagram.com" target="_blank">
                      <InstagramIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} className="footer-section">
                <Typography variant="h6" align="center" gutterBottom className="footer-title">
                  Contact Us
                </Typography>
                <Typography variant="body2" align="center" className="footer-contact">
                  Email: <Link href="mailto:info@yourcompany.com" color="inherit">info@yourcompany.com</Link>
                  <br />
                  Phone: <Link href="tel:+1234567890" color="inherit">+123 456 7890</Link>
                  <br />
                  Address: 123 Your Street, Your City, Your Country
                </Typography>
              </Grid>
            </Grid>
            <Box className="footer-bottom">
              <Typography variant="body2" align="center" className="footer-copy">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
              </Typography>
              <Typography variant="body2" align="center" className="footer-links">
                <Link href="#" color="inherit" underline="hover">Privacy Policy</Link> | 
                <Link href="#" color="inherit" underline="hover"> Terms of Service</Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </animated.div>
    </div>
  );
};

export default Courses;

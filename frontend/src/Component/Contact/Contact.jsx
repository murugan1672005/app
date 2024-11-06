import React from 'react';

import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import './Contact.css'; 
import Header from '../Home/Header/Header';

const Contact = () => {
  const clickEvent = (e) => {
    e.preventDefault();
    alert("Message send");
  }
  return (
    <>
      <Header/>
    <div className="contact-container">
      <Container className="contact-content">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img 
              src="https://img.freepik.com/free-vector/customer-service-concept-illustration_114360-20680.jpg?size=626&ext=jpg&ga=GA1.1.936429734.1721798933&semt=ais_user" 
              alt="Contact Us"
              className="contact-image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" className="contact-title">
              Get in Touch
            </Typography>
            <Typography variant="body1" className="contact-description">
              We’d love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
            </Typography>
            <form className="contact-form" onSubmit={clickEvent}>
              <TextField 
                label="Name" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                required 
              />
              <TextField 
                label="Email" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                required 
              />
              <TextField 
                label="Message" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                multiline 
                rows={4} 
                required 
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                className="submit-button"
                
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      </div>
      </>
  );
};

export default Contact;
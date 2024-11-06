import React from 'react';
import Header from './Header/Header'; 
import Main from './Body/Main'; 
import Footer from './Footer/Footer'; 
import './Home.css'; // Optional if you want to add custom styles
import { Divider } from '@mui/material';

const Home = () => {
  return (
    <>
      
        <Header/>
      
      <Divider sx={{marginY:4}}/>
      <main className='flex-grow'>
        <Main/>
      </main>
      <Divider sx={{marginY:4}}/>
      
        <Footer/>
      
    </>
  );
};

export default Home;

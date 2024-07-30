import React from 'react';

import Footer from '../Footer/Footer'; // Assume Footer is in the same folder as Navbar
import { Button } from '@mui/material';
import './Main.css'; // Include styling specific to Main
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate = useNavigate('');
  return (
    <div>
      <main>
        <h1>Welcome to Jackson Academy</h1>
        <h2>Learn and Explore the World</h2><br/>
      </main>
      <div className='home-content'>
        <div className='grid-i'>
          <div className="cssanimation hu_hu_">
            <img 
              style={{ width: "500px" ,height:"450px"}} 
              src="https://www.360edutech.com/images/E-learning-Portal-Development-01.png" 
              alt="E-Learning Portal"
            />
          </div>
        </div>
        <div className='grid'>
          <h1 style={{ color: "#222831" }}>
            Learning how to learn is life’s most important skill
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quidem assumenda laudantium delectus tenetur harum dolorem ea. 
            Eos eligendi eius optio repellat itaque laboriosam rerum, 
            natus aperiam perferendis, hic tempore.
          </p>
          <Button variant='contained' color='primary' className='hbtn' onClick={()=>navigate("/courses")}>
            Get Started!
          </Button>
        </div>
      </div>
 
    </div>
  );
};

export default Main;

import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Header = () => {
  return (
      <header>
      <h1>Jackson Academy</h1>
      <ul>
        <li> <Button className='btn' >  <Link  className='link' to="/home">Home</Link>  </Button> </li>
        <li> <Button className='btn'><Link   className='link' to="/about">About us</Link> </Button>  </li>
        <li> <Button className='btn'><Link  className='link' to="/contact">Contact</Link></Button></li>
        <li> <Button className='btn'><Link  className='link' to="/courses">Courses</Link></Button></li>
        <li> <Button className='btn'> <Link className='link' to="/enroll">Enrollment</Link></Button></li>
        <li><Button className='btn'><Link className='link' to="/material">Learning  Material</Link></Button></li>
            </ul>
    </header>
  )
}

export default Header

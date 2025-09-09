import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';
import HeaderCal from '../components/HeaderCal.jsx';
import Footer from '../components/Footer.jsx';
import carImg from '../car1.png';

function CarCal() {
  return (
    <>
      <Navbar/>
  <HeaderCal titlename="Car Calculator" imgname={carImg} titleColor="#d63031" />
      
    </>
  );
}

export default CarCal;

<Route path='/calculator/carcal' element={<CarCal/>}/>
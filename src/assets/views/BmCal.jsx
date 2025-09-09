import React from 'react';
import Navbar from '../components/navbar.jsx';
import HeaderCal from '../components/HeaderCal.jsx';
import Footer from '../components/Footer.jsx';
import bmiImg from '../bmi.png';
function BmCal() {
  return (
    <>
      <Navbar/>
  <HeaderCal titlename="BRM Calculator" imgname={bmiImg} titleColor="#fd7e14" />
      <Footer/>
    </>
  );
}

export default BmCal
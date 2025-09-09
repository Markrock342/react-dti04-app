import React from 'react';
import Navbar from '../components/navbar';
import HeaderCal from '../components/HeaderCal.jsx';
import Footer from '../components/Footer.jsx';
import squareImg from '../square.png';

function Square() {
  return (
    <>
      <Navbar/>
  <HeaderCal titlename="Square Calculator" imgname={squareImg} titleColor="#00cec9" />
      <Footer/>
    </>
  );
}

export default Square
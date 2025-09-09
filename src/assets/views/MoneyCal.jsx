import React from 'react';
import Navbar from '../components/navbar.jsx';
import HeaderCal from '../components/HeaderCal.jsx';
import Footer from '../components/Footer.jsx';
import moneyImg from '../money.png';
function MoneyCal() {
  return (
    <>
      <Navbar/>
  <HeaderCal titlename="Money Calculator" imgname={moneyImg} titleColor="#00b894" />
      <Footer/>
    </>
  );
}

export default MoneyCal
import React from 'react';
import Navbar from '../components/navbar.jsx';
import HeaderCal from '../components/HeaderCal.jsx';

function Home() {
  return (
    <div>
      <Navbar/>
  <HeaderCal titlename="Home" titleColor="#007bff" />
      <h1 style={{textAlign:'center', fontFamily:'Itim'}}>Welcome to the Home Page</h1>
      
    </div>
  )
}

export default Home
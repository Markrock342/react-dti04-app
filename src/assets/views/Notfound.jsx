import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer.jsx';

function Notfound() {
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign:'center', marginTop:'100px', fontFamily:'Itim'}}>
        404 Not Found
      </h1>
      <h1 style={{textAlign:'center', fontFamily:'Noto Sans Thai', marginTop:'20px'}}>
        😭 ไม่พบเพจที่คุณต้องการ
      </h1>
      <Footer/>
    </div>
  )
}

export default Notfound
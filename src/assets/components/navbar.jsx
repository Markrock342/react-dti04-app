
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const container = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d900ecff',
    color: '#000000ff',
    padding: '10px 30px',
  };
  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '20px',
  };
  const liStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontFamily: 'Itim',
    fontSize: '16px',
    transition: 'color 0.2s',
    color: '#3b1717ff',
  };
  return (
    <nav style={container}>
      <div style={{fontSize:'20px', fontWeight:'bold', fontFamily:'Itim'}}>DTI Calculator</div>
      <ul style={ulStyle}>
        <li style={{ ...liStyle, color: '#007bff' }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#ffeb3b' : 'inherit', textDecoration: 'none' })}>Home</NavLink>
        </li>
        <li style={{ ...liStyle, color: '#00b894' }}>
          <NavLink to="/calculator/money" style={({ isActive }) => ({ color: isActive ? '#ffeb3b' : 'inherit', textDecoration: 'none' })}>💨MONEY CAL</NavLink>
        </li>
        <li style={{ ...liStyle, color: '#00cec9' }}>
          <NavLink to="/calculator/square" style={({ isActive }) => ({ color: isActive ? '#ffeb3b' : 'inherit', textDecoration: 'none' })}>💨SQUARE CAL</NavLink>
        </li>
        <li style={{ ...liStyle, color: '#fd7e14' }}>
          <NavLink to="/calculator/bm" style={({ isActive }) => ({ color: isActive ? '#ffeb3b' : 'inherit', textDecoration: 'none' })}>💨BM CAL</NavLink>
        </li>
        <li style={{ ...liStyle, color: '#d63031' }}>
          <NavLink to="/calculator/carcal" style={({ isActive }) => ({ color: isActive ? '#ffeb3b' : 'inherit', textDecoration: 'none' })}>💨CAR CAL</NavLink>
        </li>
      </ul>
    </nav>
  );
}




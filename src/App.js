import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='Nav'>
      <NavBar />
      <Outlet />
    </div>
  );

}

export default App;

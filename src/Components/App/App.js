import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from '../../Routes/Main/Main';

function App() {
  return (
    <div className='app-cont'>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="Main" element={<Main/>} />
        </Routes>
  </div>
  );
}

export default App;


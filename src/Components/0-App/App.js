import React from 'react';
import { FilesContextProvider } from '../Context/FilesContext';
import { Route, Routes } from 'react-router-dom';
import SendInquiry from "../10-SendInquiry/SendInquiry"
import Main from '../../Routes/Main/Main';
import NavBar from '../1-NavBar/NavBar';
import Tail from '../9-Tail/Tail';
import ProjectPage from '../../Routes/Project/ProjectPage'
import OurProjects from '../../Routes/OurProjects/OurProjectsList'
import './App.css'

function App() {
  return (
      <FilesContextProvider>
        <NavBar/>
        <SendInquiry/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="Main" element={<Main/>} />
            <Route path="/project/:id" element={<ProjectPage/>} />
            <Route path="OurProjects" element={<OurProjects/>} />
          </Routes>
        <Tail/>
      </FilesContextProvider>
  );
}

export default App;

import React from 'react';
import { FilesContextProvider } from '../../Components/Context/FilesContext';
import { Route, Routes } from 'react-router-dom';
import SendInquiry from "../SendInquiry/SendInquiry"
import Main from '../../Routes/Main/Main';
import NavBar from '../../Components/NavBar/NavBar';
import ProjectPage from '../../Routes/Project/Project'
import OurProjects from '../../Routes/OurProjects/OurProjects'
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
      </FilesContextProvider>
  );
}

export default App;

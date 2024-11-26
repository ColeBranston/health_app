import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './Pages/Homepage'
import DailyInfo from './Pages/DailyInfo'
import HealthHistory from './Pages/HealthHistory'
import AccountPage from './Pages/AccountPage'
import SubmitPage from './Pages/SubmitPage'
import LoginPage from './Pages/LoginPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/DailyInfo" element={<DailyInfo/>} />
        <Route path="/HealthHistory" element={<HealthHistory/>} />
        <Route path="/Account" element={<AccountPage/>} />
        <Route path="/SubmitPage" element={<SubmitPage/>} />
        <Route path="/Login" element={<LoginPage/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 

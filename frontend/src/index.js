import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import {LoginProvider} from './components/loginpage/loginForm';
import Homepage from './Pages/Homepage'
import DailyInfo from './Pages/DailyInfo'
import HealthHistory from './Pages/HealthHistory'
import AccountPage from './Pages/AccountPage'
import SubmitPage from './Pages/SubmitPage'
import LoginPage from './Pages/LoginPage';
import NotExistPage from './Pages/NotExistPage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/DailyInfo" element={<DailyInfo/>} />
        <Route path="/HealthHistory" element={<HealthHistory/>} />
        <Route path="/Account" element={<AccountPage/>} />
        <Route path="/SubmitPage" element={<SubmitPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="*" element={<NotExistPage/>} />
      </Routes>
    </BrowserRouter>
  </LoginProvider>
);
 

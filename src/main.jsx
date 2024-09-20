import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Account from './pages/Account.jsx';
import Search from './pages/Search.jsx';
import Header from './components/Header.jsx'; 
import NewArrivals from './pages/NewArrivals.jsx';
import Brands from './pages/Brands.jsx'
import Chatbot from './Chatbot.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>

      <Route element={<ProtectedRoutes/>}>
       {/*for protected routes add here*/}
      </Route>


        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<Search />} />
        <Route path='newarrivals' element={<NewArrivals />}></Route>
        <Route path='brands' element={<Brands />}></Route>
      </Routes>
      <Chatbot /> 
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

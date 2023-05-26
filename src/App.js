import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import CafeList from './components/CafeList';

function App() {
  return (
    <div className="LoginForm">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cafes" element={<CafeList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

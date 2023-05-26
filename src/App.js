import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="LoginForm">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/coffees" element={<div />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

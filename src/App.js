import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="LoginForm">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;

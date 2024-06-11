// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Header';
import Header from './components/Header';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout />
    </div>
  );
}

export default App;

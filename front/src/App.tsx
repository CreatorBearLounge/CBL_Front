import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './app.css';
import { GlobalStyle } from './styles/global-style';
import Nav from './components/Organisms/Nav';
import Footer from './components/Organisms/Footer';
import Router from './Router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Nav />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

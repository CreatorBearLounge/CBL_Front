import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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

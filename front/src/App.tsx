import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global-style';
import Nav from './components/Organisms/Nav';
import ThumbnailList from './components/Molecule/ThumbnailList';
import Footer from './components/Organisms/Footer';
import Router from './Router';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Nav />
        <HomeTemplateDiv>
          <MenuPart>
            <Menu />
          </MenuPart>
          <MainPart>
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/:category" element={<ThumbnailList />} />
            </Routes>
          </MainPart>
        </HomeTemplateDiv>
        <Router />
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;

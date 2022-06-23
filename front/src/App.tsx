import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global-style';
import Menu from './components/Organisms/Menu';
import Nav from './components/Organisms/Nav';
import ThumbnailList from './components/Molecule/ThumbnailList';

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
      </div>
    </BrowserRouter>
  );
};

export default App;

const MenuPart = styled.div`
  width: 385px;
  height: 2032px;
  background-color: #f6f3ec;
  position: fixed;
`;

const MainPart = styled.div`
  padding-left: 385px;
  width: calc(100% - 385px);
  height: 2032px;
  background-color: #27241f;
`;

const HomeTemplateDiv = styled.div`
  width: 100%;
  padding-top: 70px;
  height: auto;
`;

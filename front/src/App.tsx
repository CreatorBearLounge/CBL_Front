import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global-style';
import Nav from './components/Organisms/Nav';
import Footer from './components/Organisms/Footer';
import Router from './Router';
import ShopMainPage from './components/Pages/ShopMainPage';
import ScrollTop from './module/ScrollTop';
import NFTPage from './components/Pages/NFTPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollTop /> {/* 페이지 이동시 스크롤 상단 고정 */}
      <div className="App">
        <Nav />
        <Main>
          <Routes>
            <Route path="/" element={<ShopMainPage />} />
            <Route path="/shop" element={<ShopMainPage />} />
            <Route path="/shop/*" element={<Router />} />
            <Route path="/nft" element={<NFTPage />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

const Main = styled.div`
  padding-top: 80px;
`;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Organisms/Menu';
import ShopDetailPage from './components/Pages/ShopDetailPage';
import ThumbnailList from './components/Molecule/ThumbnailList';

const Router: React.FC = () => {
  return (
    <HomeTemplateDiv>
      <MenuPart>
        <Menu />
      </MenuPart>
      <MainPart>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/:category" element={<ThumbnailList />} />
          <Route path="/arts/:artsId" element={<ShopDetailPage />} />
        </Routes>
      </MainPart>
    </HomeTemplateDiv>
  );
};

export default Router;

const MenuPart = styled.div`
  margin-top: 112px;
  margin-left: 143px;
`;

const MainPart = styled.div`
  margin-left: 76px;
  margin-right: 143px;
  padding-top: 112px;
  width: calc(100% - 385px);
  max-width: 1237px;
  height: auto;
  padding-bottom: 219px;
`;

const HomeTemplateDiv = styled.div`
  width: 100%;
  padding-top: 80px;
  height: auto;
  background-color: #27241f;
  display: flex;
  justify-content: center;
`;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopDetailPage from './components/Pages/ShopDetailPage';
import LeftMenuPageTemplate from './components/Templates/LeftMenuPageTemplate';
import ShopContentPage from './components/Pages/ShopContentPage';
import AuthorProfilePage from './components/Pages/AuthorProfilePage';

const Router: React.FC = () => {
  return (
    <LeftMenuPageTemplate>
      <Routes>
        <Route path="" element={<></>} />
        <Route path=":category" element={<ShopContentPage />} />
        <Route path="arts/:artsId" element={<ShopDetailPage />} />
        <Route path="artist/:artistId" element={<AuthorProfilePage />} />
      </Routes>
    </LeftMenuPageTemplate>
  );
};

export default Router;

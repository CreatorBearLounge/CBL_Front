import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopDetailPage from './components/Pages/ShopDetailPage';
import LeftMenuPageTemplate from './components/Templates/LeftMenuPageTemplate';
import ThumbnailList from './components/Molecules/ThumbnailList';

const Router: React.FC = () => {
  return (
    <LeftMenuPageTemplate>
      <Routes>
        <Route path="" element={<></>} />
        <Route path=":category" element={<ThumbnailList />} />
        <Route path="arts/:artsId" element={<ShopDetailPage />} />
      </Routes>
    </LeftMenuPageTemplate>
  );
};

export default Router;

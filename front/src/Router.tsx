import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShopDetailPage from './components/Pages/ShopDetailPage';
import LeftMenuPageTemplate from './components/Templates/LeftMenuPageTemplate';
import ShopContent from './components/Organisms/ShopContent';

const Router: React.FC = () => {
  return (
    <LeftMenuPageTemplate>
      <Routes>
        <Route path="" element={<></>} />
        <Route path=":category" element={<ShopContent />} />
        <Route path="arts/:artsId" element={<ShopDetailPage />} />
      </Routes>
    </LeftMenuPageTemplate>
  );
};

export default Router;

import React from 'react';
import styled from 'styled-components';
import Menu from '../Organisms/Menu';

interface LmptType {
  children: React.ReactNode;
}

const LeftMenuPageTemplate: React.FC<LmptType> = ({ children }) => {
  return (
    <HomeTemplateDiv>
      <MenuPart>
        <Menu />
      </MenuPart>
      <MainPart>{children}</MainPart>
    </HomeTemplateDiv>
  );
};

export default LeftMenuPageTemplate;

const HomeTemplateDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #27241f;
  display: flex;
  justify-content: center;
`;

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

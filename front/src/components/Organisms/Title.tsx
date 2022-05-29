import React from 'react';
import styled from 'styled-components';

interface TitleType {
  menuTitle: string;
  menuContent: string;
}

const Title: React.FC<TitleType> = ({ menuTitle, menuContent }) => {
  return (
    <>
      <MainTitle>CREATOR BEAR LOUNGE</MainTitle>
      <MenuTitle>{menuTitle}</MenuTitle>
      <MenuContent>{menuContent}</MenuContent>
    </>
  );
};

export default Title;

const MainTitle = styled.p`
  width: 358px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35.52px;
  padding-top: 100px;
  margin-left: 100px;
  color: #796958;
`;

const MenuTitle = styled.h1`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 59.2px;
  padding-top: 45px;
  margin-left: 100px;
  color: #ecd9b2;
`;

const MenuContent = styled.p`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.72px;
  padding-top: 38px;
  margin-left: 100px;
  color: #ecd9b2;
`;

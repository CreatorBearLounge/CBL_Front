import React from 'react';
import styled from 'styled-components';

interface TitleType {
  menuTitle: string;
  menuContent: string;
}

const TitleAtom: React.FC<TitleType> = ({ menuTitle, menuContent }) => {
  return (
    <TitleBox>
      <MenuTitle>{menuTitle}</MenuTitle>
      <MenuContent>{menuContent}</MenuContent>
    </TitleBox>
  );
};

export default TitleAtom;

const TitleBox = styled.div`
  margin-left: 20px;
`;

const MenuTitle = styled.h1`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  line-height: normal;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ecd9b2;
  letter-spacing: -0.48px;
`;

const MenuContent = styled.p`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  font-size: 1em;
  padding-top: 0.7%;
  color: #a7a7a7;
  letter-spacing: -0.32px;
`;

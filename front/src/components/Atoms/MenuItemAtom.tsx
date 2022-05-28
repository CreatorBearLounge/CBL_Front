import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuItemAtomType {
  menuName: string;
  menuHref: string;
}

const MenuItemAtom: React.FC<MenuItemAtomType> = ({ menuName, menuHref }) => {
  return (
    <Link to={menuHref}>
      <MenuItem>{menuName}</MenuItem>
    </Link>
  );
};

export default MenuItemAtom;

const MenuItem = styled.p`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
`;

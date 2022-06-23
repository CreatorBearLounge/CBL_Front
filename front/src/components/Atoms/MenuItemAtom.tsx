import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

interface MenuItemAtomType {
  menuName: string;
  menuHref: string;
}

interface MenuItemStyle {
  isActive?: boolean;
}

const MenuItemAtom: React.FC<MenuItemAtomType> = ({ menuName, menuHref }) => {
  const navLinkStyle = ({ isActive }: MenuItemStyle) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };
  return (
    <NavLink to={menuHref} style={navLinkStyle}>
      <MenuItem>{menuName}</MenuItem>
    </NavLink>
  );
};

export default MenuItemAtom;

const MenuItem = styled.p<MenuItemStyle>`
  font-family: 'Noto Sans CJK KR';
  font-size: 0.875rem;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #796958;
`;

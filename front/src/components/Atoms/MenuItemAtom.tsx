import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuItemAtomType {
  menuName: string;
  menuHref: string;
  // eslint-disable-next-line react/require-default-props
  click?: boolean;
}

interface MenuItemStyle {
  click?: boolean;
}

const MenuItemAtom: React.FC<MenuItemAtomType> = ({
  menuName,
  menuHref,
  click,
}) => {
  return (
    <Link to={menuHref}>
      <MenuItem click={click}>{menuName}</MenuItem>
    </Link>
  );
};

export default MenuItemAtom;

const MenuItem = styled.p<MenuItemStyle>`
  font-family: 'Noto Sans CJK KR';
  font-weight: ${(props) => (props.click ? 'bold' : 'normal')};
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #796958;
`;

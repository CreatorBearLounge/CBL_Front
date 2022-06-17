import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavItemAtomType {
  menuName: string;
  menuHref: string;
}

const NavMenuAtom: React.FC<NavItemAtomType> = ({ menuName, menuHref }) => {
  return (
    <Link to={menuHref}>
      <NavItem>{menuName}</NavItem>
    </Link>
  );
};

export default NavMenuAtom;

const NavItem = styled.p`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 30px;
  color: #796958;
`;

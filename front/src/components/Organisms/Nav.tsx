import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavMenuAtom from '../Atoms/NavMenuAtom';

const Nav: React.FC = () => {
  return (
    <Header>
      <Link to="/">
        <MainHeaderText>CREATOR BEAR LOUNGE</MainHeaderText>
      </Link>
      <HeaderMenuDiv>
        <ul>
          <HeaderMenuLi>
            <NavMenuAtom menuName="NFT" menuHref="nft" />
          </HeaderMenuLi>
          <HeaderMenuLi>
            <NavMenuAtom menuName="TEAM" menuHref="team" />
          </HeaderMenuLi>
          <HeaderMenuLi>
            <NavMenuAtom menuName="SHOP" menuHref="shop" />
          </HeaderMenuLi>
        </ul>
        <ConnectBtn>Connected Wallet</ConnectBtn>
      </HeaderMenuDiv>
    </Header>
  );
};

export default Nav;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ecd9b2;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MainHeaderText = styled.h1`
  width: 358px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  margin-left: 100px;
  color: #796958;
`;

const HeaderMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 100px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderMenuLi = styled.li`
  margin-left: 60px;
`;

const ConnectBtn = styled.button`
  margin-left: 80px;
  border: 2px solid #796958;
  border-radius: 30px;
  width: 200px;
  height: 50px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #796958;
  background-color: #ecd9b2;
  cursor: pointer;
`;

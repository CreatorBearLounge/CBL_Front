import React from 'react';
import styled from 'styled-components';
import MenuItemAtom from '../Atoms/MenuItemAtom';

const Menu: React.FC = () => {
  return (
    <MenuDiv>
      <MenuText>MENU</MenuText>
      <ul>
        <MenuItemLi>
          <MenuItemAtom
            menuName="대규모 마인크래프트 맵"
            menuHref="bigminecraftmap"
          />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom
            menuName="번들 및 중규모 마인크래프트 맵"
            menuHref="bundleandmiddleminecraftmap"
          />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom menuName="음악" menuHref="music" />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom
            menuName="효과음과 배경음악"
            menuHref="soundeffectsandbackgroundmusic"
          />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom
            menuName="복쉘 아트워크와 에셋"
            menuHref="boxelartworkandasset"
          />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom menuName="3D 모델링" menuHref="3dmodeling" />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom
            menuName="블록벤치 모델링"
            menuHref="blockbenchmodeling"
          />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom menuName="폰트" menuHref="font" />
        </MenuItemLi>
        <MenuItemLi>
          <MenuItemAtom menuName="VIP 라운지" menuHref="viplounge" />
        </MenuItemLi>
      </ul>
    </MenuDiv>
  );
};

export default Menu;

const MenuDiv = styled.div`
  width: auto;
  height: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 99px;
`;

const MenuText = styled.h1`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 37px;
`;

const MenuItemLi = styled.li`
  width: 190px;
  margin-bottom: 26px;
`;

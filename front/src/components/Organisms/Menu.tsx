import React from 'react';
import styled from 'styled-components';
import MenuItemAtom from '../Atoms/MenuItemAtom';

const Menu: React.FC = () => {
  return (
    <MenuDiv>
      <MenuWrapper>
        <MenuText>SHOP</MenuText>
        <MenuHead>
          <span className="material-icons brown">menu</span>
          <p>MENU</p>
        </MenuHead>
        <MenuContent>
          <MenuSearch>
            <input type="text" placeholder="제작자 및 제목 검색" />
            <span className="material-icons brown">search</span>
          </MenuSearch>
          <ul>
            <MenuItemLi>
              <MenuItemAtom
                menuName="대규모 마인크래프트 맵"
                menuHref="bigminecraftmap"
                click
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
              <MenuItemAtom menuName="배경음악" menuHref="backgroundmusic" />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="복쉘 아트워크 Obj"
                menuHref="boxelartworkobj"
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
              <MenuItemAtom
                menuName="스킨 및 텍스쳐"
                menuHref="skin and texture"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="플러그인 및 서버팩"
                menuHref="pluginandserverpack"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom menuName="폰트" menuHref="font" />
            </MenuItemLi>
          </ul>
        </MenuContent>
        <MenuFooter>
          <span className="material-icons brown">help_outline</span>
          <p>고객센터</p>
        </MenuFooter>
      </MenuWrapper>
    </MenuDiv>
  );
};

export default Menu;

const MenuDiv = styled.div`
  width: 321px;
  height: 803px;
  display: flex;
  flex-direction: column;
  background-color: #f6f3ec;
`;

const MenuWrapper = styled.div`
  margin: 60px 36px;
`;

const MenuText = styled.h1`
  font-family: 'Noto Sans CJK KR';
  font-weight: bold;
  font-size: 20px;
  line-height: normal;
  color: #796958;
  margin-bottom: 19px;
`;

const MenuItemLi = styled.li`
  margin-bottom: 19px;
  margin-left: 17px;
`;

const MenuHead = styled.div`
  border-top: 2px solid #796958;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    margin-right: 19px;
  }
  p {
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: bold;
    color: #796958;
    line-height: 1;
    letter-spacing: normal;
  }
`;

const MenuContent = styled.div`
  border-top: 1px solid #796958;
  border-bottom: 1px solid #796958;
  height: 521px;
`;

const MenuFooter = styled.div`
  border-bottom: 2px solid #796958;
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    margin-right: 19px;
  }
  p {
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: bold;
    color: #796958;
    line-height: 1;
    letter-spacing: normal;
  }
`;

const MenuSearch = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 36px;
  margin-bottom: 29px;
  position: relative;
  input {
    outline-style: none;
    border: 1px solid #796958;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0);
    font-family: 'Noto Sans CJK KR';
    font-size: 12px;
    font-weight: 500;
    text-indent: 17px;
    letter-spacing: -0.24px;
  }
  input::placeholder {
    color: #c2baa8;
  }
  span {
    position: absolute;
    right: 17px;
    top: 11px;
    width: 20px;
    height: 20px;
  }
`;

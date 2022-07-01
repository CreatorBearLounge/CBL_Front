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
                menuName="The Sandbox Asset"
                menuHref="thesandboxasset"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="Special Minecraft Map"
                menuHref="specialminecraftmap"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="Bundle & Normal Minecraft Map"
                menuHref="bundleandnormalminecraftmap"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom menuName="Epic Music" menuHref="epicmusic" />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="Sound Effect & BGM"
                menuHref="soundeffectandbgm"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom menuName="Voxel obj file" menuHref="voxelobjfile" />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom menuName="3D Modeling" menuHref="3dmodeling" />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="Blockbench Modeling"
                menuHref="blockbenchmodeling"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom
                menuName="Plugin & Server Pack"
                menuHref="pluginandserverpack"
              />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom menuName="Font Design" menuHref="fontdesign" />
            </MenuItemLi>
            <MenuItemLi>
              <MenuItemAtom menuName="VIP Lounge" menuHref="viplounge" />
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
  font-size: 1.25rem;
  line-height: normal;
  color: #796958;
  margin-bottom: 19px;
`;

const MenuItemLi = styled.li`
  margin-bottom: 19px;
  margin-left: 17px;
  height: 21px;
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
    font-size: 1rem;
    font-weight: bold;
    color: #796958;
    line-height: 1;
    letter-spacing: normal;
  }
`;

const MenuContent = styled.div`
  border-top: 1px solid #796958;
  border-bottom: 1px solid #796958;
  height: 541px;
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
    font-size: 1rem;
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
    font-size: 0.75rem;
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

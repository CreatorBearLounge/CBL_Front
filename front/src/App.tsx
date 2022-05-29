import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import './app.css';
import { GlobalStyle } from './styles/global-style';
import Menu from './components/Organisms/Menu';
import Nav from './components/Organisms/Nav';
import Title from './components/Organisms/Title';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Nav />
        <HomeTemplateDiv>
          <MenuPart>
            <Menu />
          </MenuPart>
          <MainPart>
            <Routes>
              <Route path="/" element={<></>} />
              <Route
                path="/bigminecraftmap"
                element={
                  <Title
                    menuTitle="대규모 마인크래프트 맵"
                    menuContent="마인크래프트 대규모 맵
                200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/bundleandmiddleminecraftmap"
                element={
                  <Title
                    menuTitle="번들 및 중규모 마인크래프트 맵"
                    menuContent="마인크래프트 대규모 맵
            200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/music"
                element={
                  <Title
                    menuTitle="음악"
                    menuContent="마인크래프트 대규모 맵
      200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/backgroundmusic"
                element={
                  <Title
                    menuTitle="배경음악"
                    menuContent="마인크래프트 대규모 맵
      200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/boxelartworkobj"
                element={
                  <Title
                    menuTitle="복쉘 아트워크 Obj"
                    menuContent="마인크래프트 대규모 맵
      200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/3dmodeling"
                element={
                  <Title
                    menuTitle="3D 모델링"
                    menuContent="마인크래프트 대규모 맵
      200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/blockbenchmodeling"
                element={
                  <Title
                    menuTitle="블록벤치 모델링"
                    menuContent="마인크래프트 대규모 맵
            200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/skinandtexture"
                element={
                  <Title
                    menuTitle="스킨 및 텍스쳐"
                    menuContent="마인크래프트 대규모 맵
      200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/pluginandserverpack"
                element={
                  <Title
                    menuTitle="플러그인 및 서버팩"
                    menuContent="마인크래프트 대규모 맵
            200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
              <Route
                path="/font"
                element={
                  <Title
                    menuTitle="폰트"
                    menuContent="마인크래프트 대규모 맵
      200x200 이상 규모의 마인크래프트 맵입니다."
                  />
                }
              />
            </Routes>
          </MainPart>
        </HomeTemplateDiv>
      </div>
    </BrowserRouter>
  );
};

export default App;

const MenuPart = styled.div`
  width: 385px;
  height: 2032px;
  background-color: #f6f3ec;
  position: fixed;
`;

const MainPart = styled.div`
  padding-left: 385px;
  width: calc(100% - 385px);
  height: 2032px;
  background-color: #27241f;
`;

const HomeTemplateDiv = styled.div`
  width: 100%;
  padding-top: 100px;
  height: auto;
`;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
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
                    menuContent="200x200 이하 마인크래프트 맵, 혹은 낱개 건물과 번들 모음입니다."
                  />
                }
              />
              <Route
                path="/music"
                element={
                  <Title
                    menuTitle="음악"
                    menuContent="시네마틱이나 뮤직비디오에 쓰기 좋은 퀄리티 높은 음악입니다."
                  />
                }
              />
              <Route
                path="/soundeffectsandbackgroundmusic"
                element={
                  <Title
                    menuTitle="효과음과 배경음악"
                    menuContent="효과음과 가벼운 배경음악입니다. 유튜브와 같은 콘텐츠나 영상제작에 쓰기 좋습니다."
                  />
                }
              />
              <Route
                path="/boxelartworkandasset"
                element={
                  <Title
                    menuTitle="복쉘 아트워크와 에셋"
                    menuContent="블럭으로 만들어진 3D 오브젝트 모음입니다. 북쉘아트 그래픽이 필요한 인디게임 활용 혹은 더 샌드박스 에셋 제작에 추천합니다."
                  />
                }
              />
              <Route
                path="/3dmodeling"
                element={
                  <Title
                    menuTitle="3D 모델링"
                    menuContent="3D 모델링들 입니다. obj 파일로 이루어져있습니다."
                  />
                }
              />
              <Route
                path="/blockbenchmodeling"
                element={
                  <Title
                    menuTitle="블록벤치 모델링"
                    menuContent="블럭벤치 Json 모델링입니다. 마인크래프트에서 활용 가능합니다."
                  />
                }
              />
              <Route
                path="/font"
                element={
                  <Title
                    menuTitle="폰트"
                    menuContent="CBL에서 직접 만든 폰트입니다."
                  />
                }
              />
              <Route
                path="/viplounge"
                element={
                  <Title
                    menuTitle="VIP 라운지"
                    menuContent="5개 이상 홀더들만 다운로드 가능한 VIP 라운지 입니다."
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
  padding-top: 70px;
  height: auto;
`;

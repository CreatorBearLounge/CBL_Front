import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './app.css';
import { GlobalStyle } from './styles/global-style';
import Menu from './components/Organisms/Menu';
import Nav from './components/Organisms/Nav';

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
                element={<>대규모마인크래프트맵</>}
              />
              <Route
                path="/bundleandmiddleminecraftmap"
                element={<>번들 및 중규모 마인크래프트 맵</>}
              />
              <Route path="/music" element={<>음악</>} />
              <Route path="/backgroundmusic" element={<>배경음악</>} />
              <Route path="/boxelartworkobj" element={<>복쉘 아트워크 Obj</>} />
              <Route path="/3dmodeling" element={<>3D 모델링</>} />
              <Route
                path="/blockbenchmodeling"
                element={<>블록벤치 모델링</>}
              />
              <Route path="/skinandtexture" element={<>스킨 및 텍스쳐</>} />
              <Route
                path="/pluginandserverpack"
                element={<>플러그인 및 서버팩</>}
              />
              <Route path="/font" element={<>폰트</>} />
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

import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TitleAtom from '../Atoms/TitleAtom';
import Pagination from '../Molecules/Pagination';

const ShopContentPage: React.FC = () => {
  const location = useLocation().pathname;

  let menuTitle = '';
  let menuContent = '';

  if (location === '/shop/bigminecraftmap') {
    menuTitle = '대규모 마인크래프트 맵';
    menuContent =
      '마인크래프트 대규모 맵 200x200 이상 규모의 마인크래프트 맵입니다.';
  } else if (location === '/shop/bundleandmiddleminecraftmap') {
    menuTitle = '번들 및 중규모 마인크래프트 맵';
    menuContent =
      '200x200 이하 마인크래프트 맵, 혹은 낱개 건물과 번들 모음입니다.';
  } else if (location === '/shop/music') {
    menuTitle = '음악';
    menuContent = '시네마틱이나 뮤직비디오에 쓰기 좋은 퀄리티 높은 음악입니다.';
  } else if (location === '/shop/soundeffectsandbackgroundmusic') {
    menuTitle = '효과음과 배경음악';
    menuContent =
      '효과음과 가벼운 배경음악입니다. 유튜브와 같은 콘텐츠나 영상제작에 쓰기 좋습니다.';
  } else if (location === '/shop/boxelartworkandasset') {
    menuTitle = '복쉘 아트워크와 에셋';
    menuContent =
      '블럭으로 만들어진 3D 오브젝트 모음입니다. 북쉘아트 그래픽이 필요한 인디게임 활용 혹은 더 샌드박스 에셋 제작에 추천합니다.';
  } else if (location === '/shop/3dmodeling') {
    menuTitle = '3D 모델링';
    menuContent = '3D 모델링들 입니다. obj 파일로 이루어져있습니다.';
  } else if (location === '/shop/blockbenchmodeling') {
    menuTitle = '블록벤치 모델링';
    menuContent =
      '블럭벤치 Json 모델링입니다. 마인크래프트에서 활용 가능합니다.';
  } else if (location === '/shop/font') {
    menuTitle = '폰트';
    menuContent = 'CBL에서 직접 만든 폰트입니다.';
  } else if (location === '/shop/viplounge') {
    menuTitle = 'VIP 라운지';
    menuContent = '5개 이상 홀더들만 다운로드 가능한 VIP 라운지 입니다.';
  } else if (location === '/shop/thesansboxasset') {
    menuTitle = '더 샌드박스 에셋';
    menuContent = '샌드박스 에셋입니다.';
  }
  return (
    <>
      <TitleAtom menuTitle={menuTitle} menuContent={menuContent} />
      <ThumbnailBox>
        <Pagination menuTitle={menuTitle} />
      </ThumbnailBox>
    </>
  );
};

export default ShopContentPage;

const ThumbnailBox = styled.div`
  width: 1237px;
  height: 1230.5px;
  margin: 83px 143px 60.5px 0px;
  padding: 0 0 312.3px;
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainBlackBtn from '../Atoms/MainBlackBtn';
import MainCategoryBox from '../Molecules/MainCategoryBox';
import DetailBox from '../Organisms/DetailBox';

const ShopMainPage: React.FC = () => {
  return (
    <div>
      <MainHead>
        <div>
          <h1>
            CREATOR BEAR LOUNGE <span>SHOP</span>
          </h1>
          <p>곰돌이 아티스트들의 작품을 지금 바로 만나보세요!</p>
          <NftBtn to="/nft">NFT 소개 바로가기</NftBtn>
        </div>
      </MainHead>
      <MainContent>
        <CategoryUl>
          <li>
            <DetailBox
              title="대규모 마인크래프트 맵"
              link="/bigminecraftmap"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="번들 및 중규모 마인크래프트 맵"
              link="/bundleandmiddleminecraftmap"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="음악"
              link="/music"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="배경음악"
              link="/soundeffectsandbackgroundmusic"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
        </CategoryUl>
        <ShopMainBanner>
          <div>
            <ShopMainBannerLeft>
              <h1>이달의 신규 작품</h1>
              <p>곰돌이 아티스트들의 작품을 지금 바로 만나보세요!</p>
              <MainBlackBtn
                width="181"
                height="46"
                iconSize="20"
                text="신규작품 바로가기"
              />
            </ShopMainBannerLeft>
          </div>
        </ShopMainBanner>
        <CategoryUl>
          <li>
            <DetailBox
              title="복쉘 아트워크 obj"
              link="/boxelartworkandasset"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="3D모델링"
              link="/3dmodeling"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="블록벤처 모델링"
              link="/blockbenchmodeling"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="폰트"
              link="/font"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="VIP 라운지"
              link="/viplounge"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
          <li>
            <DetailBox
              title="더 샌드박스 에셋"
              link="/thesansboxasset"
              linkName="더보기"
              content={<MainCategoryBox />}
            />
          </li>
        </CategoryUl>
        <ShopFooterBanner>
          <ShopFooterBannerLeft>
            <h1>주간 베스트 작품</h1>
            <p>이번주 곰돌이 아티스트들의 베스트 작품은?</p>
          </ShopFooterBannerLeft>
          <ShopFooterBannerRight>
            <MainBlackBtn
              width="292"
              height="61"
              iconSize="26"
              text="주간 베스트 작품 바로가기"
            />
          </ShopFooterBannerRight>
        </ShopFooterBanner>
      </MainContent>
    </div>
  );
};

export default ShopMainPage;

const MainHead = styled.div`
  width: 100%;
  height: 600px;

  background: url('https://pbs.twimg.com/media/EqD-bQrVoAAu98H?format=jpg&name=large')
    no-repeat center;
  background-size: cover;
  h1 {
    height: 74px;
    width: 693px;
    font-size: 3.125rem;
    font-weight: normal;
    letter-spacing: -1px;
    color: #fff;
    margin-bottom: 10px;
    span {
      font-weight: bold;
    }
  }
  p {
    width: 486px;
    font-size: 1.5rem;
    line-height: 1.8;
    letter-spacing: -0.48px;
    text-align: center;
    color: #fff;
    margin-bottom: 57px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Noto Sans CJK KR';
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
`;

const NftBtn = styled(Link)`
  cursor: pointer;
  width: 240px;
  height: 58.31px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #ecd9b2;
  border-radius: 30px;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ecd9b2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const CategoryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1309px;
  margin-bottom: 80px;
  > li {
    width: 643px;
    margin-bottom: 60px;
  }
  &:nth-of-type(2) {
    margin-top: 120px;
  }
`;

const ShopMainBanner = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ecd9b2;
  display: flex;
  justify-content: center;
  > div {
    width: 1309px;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://s3-alpha-sig.figma.com/img/b9fb/87af/9f37085cdb49870896914c91d9577907?Expires=1656892800&Signature=KELX5lxRyqvvw6H59vvoUZF0oocr902GDP5lNzkJU0PdT~zdVlRma9p2jAAcFMPVGE1Nvu8a1UGe~oEF7vZQ9rJCsqC94xWnao5V4NAKCqFTRwBx-PpH15P4KfGBogeWZRSk~bACYod6V5zBiYmdJFCu1QF7GDBkQtEyTn0hRFUOloCLST0TpgboMtjWNqFXbQ6ew2REIBNBc9Pg2SWGcTpoNRRwJ6TNskFqyrPw~0c~X1RjJSEDcY086cTOyqNSVGDcTeLbOK~-cMpBNf-YC0fw4tNz1bLt-8-vKJ-Y5qdosUlJSrI-gx8mTrQclwMroR2rUxK68eAuDSd7USXFcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
  }
`;

const ShopMainBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Noto Sans CJK KR';
  h1 {
    margin-top: 77px;
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: -0.6px;
    color: #27231f;
    margin-bottom: 3px;
    width: 202px;
  }
  > p {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.8;
    letter-spacing: -0.32px;
    color: #27231f;
    margin-bottom: 24px;
    width: 324px;
  }
  button {
    cursor: pointer;
    width: 181px;
    height: 46px;
    background-color: #27231f;
    border-radius: 23px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.875rem;
      line-height: 1.8;
      letter-spacing: -0.28px;
      color: #fff;
      font-weight: normal;
      margin-right: 10px;
    }
    svg {
      padding-bottom: 6px;
    }
  }
`;

const ShopFooterBanner = styled.div`
  width: 1309px;
  height: 200px;
  background-color: #ecd9b2;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 153px;
`;

const ShopFooterBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans CJK KR';
  margin-left: 96px;
  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: -0.6px;
    color: #27231f;
    margin-bottom: 3px;
  }
  p {
    font-size: 1rem;
    line-height: 1.8;
    letter-spacing: -0.32px;
    color: #27231f;
  }
`;

const ShopFooterBannerRight = styled.div`
  margin-right: 62px;
`;

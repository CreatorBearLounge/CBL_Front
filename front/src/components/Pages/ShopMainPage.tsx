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
        <img
          src="https://static.wixstatic.com/media/19692f_596d1f14201047469c656d42b90ad255~mv2.png"
          alt=""
        />
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
              title="Special Minecraft Map"
              link="/specialminecraftmap"
              linkName="더보기"
              content={<MainCategoryBox category="Special Minecraft Map" />}
            />
          </li>
          <li>
            <DetailBox
              title="Bundle & Normal Minecraft Map"
              link="/bundleandnormalminecraftmap"
              linkName="더보기"
              content={
                <MainCategoryBox category="Bundle & Normal Minecraft Map" />
              }
            />
          </li>
          <li>
            <DetailBox
              title="Epic Music"
              link="/epicmusic"
              linkName="더보기"
              content={<MainCategoryBox category="Epic Music" />}
            />
          </li>
          <li>
            <DetailBox
              title="Sound Effect & BGM"
              link="/soundeffectandbgm"
              linkName="더보기"
              content={<MainCategoryBox category="Sound Effect & BGM" />}
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
              title="Voxel obj file"
              link="/voxelobjfile"
              linkName="더보기"
              content={<MainCategoryBox category="Voxel obj file" />}
            />
          </li>
          <li>
            <DetailBox
              title="3D Modeling"
              link="/3dmodeling"
              linkName="더보기"
              content={<MainCategoryBox category="3D Modeling" />}
            />
          </li>
          <li>
            <DetailBox
              title="Blockbench Modeling"
              link="/blockbenchmodeling"
              linkName="더보기"
              content={<MainCategoryBox category="Blockbench Modeling" />}
            />
          </li>
          <li>
            <DetailBox
              title="Font Design"
              link="/fontdesign"
              linkName="더보기"
              content={<MainCategoryBox category="Font Design" />}
            />
          </li>
          <li>
            <DetailBox
              title="VIP Lounge"
              link="/viplounge"
              linkName="더보기"
              content={<MainCategoryBox category="VIP Lounge" />}
            />
          </li>
          <li>
            <DetailBox
              title="The Sandbox Asset"
              link="/thesansboxasset"
              linkName="더보기"
              content={<MainCategoryBox category="The Sandbox Asset" />}
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
  overflow: hidden;
  img {
    width: 100%;
    min-width: 1569px;
    top: -200px;
    position: fixed;
    z-index: -99;
  }
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
    background-color: rgba(0, 0, 0, 0.7);
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
  padding-top: 80px;
  background-color: #27241f;
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

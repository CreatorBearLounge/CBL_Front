import React from 'react';
import styled from 'styled-components';
import NFTBenefitBox from '../Atoms/NFTBenefitBox';
import NFTRoadMapBox from '../Atoms/NFTRoadMapBox';
import NFTCategoryBox from '../Molecules/NFTCategoryBox';

// 디자인 사이즈 임의 조정 -> 추후 수정 예정

const NFTPage: React.FC = () => {
  return (
    <>
      <NFTHead>
        <div />
        <img
          src="https://s3-alpha-sig.figma.com/img/49a4/0082/b88c626fdf2cc2b507becc996504b6d6?Expires=1657497600&Signature=SaEGW0Wr89dt5Vap~nGNeO8gde~~iTBGmVfzIlGJdpk2KrF-QacEjx-OiPPdUfw2rsuswYScA5NKPCJRDn55xwX4-KBlF~JLN-iaR2QqEtyoUXglCY4YLaIiN6EDEkXUuYV~kZ2UtStrJl1n19U1n-caGptAFA90sxyKp~s3JuMMVozpea2R3eMBA9fT0YKJWxKhTy5luh0KG-bF1Wn0Q79S6bxC8XedaADqea7E6C3mV8tCuTWKa5qbC3Zxy96xz44lH3gemAtQjZ2kC0tjnmrnsDmPKC5dImf1RjOghEpBV9pJlOTVMsxyxAMHeL7FfaFyXhKsEpYsH~oDKs7HpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
      </NFTHead>
      <NFTLounge>
        <LoungeIntroBox>
          <h1>CREATOR BEAR LOUNGE</h1>
          <p>
            크리에이터 베어 라운지는 예술을 사랑하는 곰들이 모인 공간입니다!{' '}
            <br />
            라운지 재단은 10년간 유지되어온 대한민국의 메타버스 그룹 GBF
            Studio에서 운영합니다. <br />
            라운지 재단에서는 곰돌이 아티스트를 위해 다양한 혜택을 제공합니다.
          </p>
        </LoungeIntroBox>
        <LoungeBearBox>
          <img
            src="https://s3-alpha-sig.figma.com/img/3dc8/269b/7a8117bab547445d3667ed4b3069ac77?Expires=1657497600&Signature=b3MIUog3PnMGD41covlUOv0k8ctz0~DcezVyxSdjseFeSr0z7T~g6L8VTgYRZFt-lvZCMC3qwUVxE37dfo1Ew1By9vz~QwTJZrWhno1sngRFNjv5FCb5C1EMIkUO-o49fVUXYMcduwszQ3VAymoOr~~jQrMj-tk2EBbyiQlnimlTy7yziJX5lEc-O-uViTfE~IREOkVqz5g9AxTP~apnkD8W7UvE-LSesQvh~ZXMtoaVWoH~LxjobKqpKrO5InHvs7N5dFyeDtiKqNSTrpkdxqaiWtuu9E3jtszSAGdxN~6sYF2AROnxns0kY7spFXS7aj8KNxEA6PrGFeWFTQ-EkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/52fc/08d6/cd3fbaece5d75528fb178012e9b0a535?Expires=1657497600&Signature=GFvgQavQDU-1zvNPQMUBHekAohzcLcUX5Hu90Nx3e4H5CFTUrXmSOhHCvFMidNz5mCzPVrUcjKEG9KjX3L4j8MMAMkWloE8pxePbDaQVUWixLQw8scemCBBzWAxJBM5iVsJ66MoFCPHytuwWW7guKPkVS-e9q~TTV9HquhLs45eX6TyWqYTzPJ4Ctcf3cTnWQWcCn6l-iXe0xHIX47G8WYBgLVTzR4GHXZl49yepjW6j4dDdOnUO0nqFb1BwCg6AUT89N93E3R2gXWumtW2mgP3Qg3S0qOUqu5e-j~IwitWFRoiyhjfoBHVFi37-RDStUdL-P7FGbCL3mtmnZwdK9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/8fea/66ce/3ddcbf701cc4e0e370e52a43557c2e96?Expires=1657497600&Signature=FSID-NpqcqU19~n4Q8pG-v6~9q6d8m-GwALqOPhYG2~AH1TT1~~Qhh-Q4VSaeE2KKo2fv3HVyq1fWEve8m-YvJ83wADahSca3VUh7JPiftc8jomrMuyayFTyTJMYUAQc~NXJJvpXnmoIKWuG84SRw-CHHt0sVpRWHBdkCAWwgOBPvFtObNqS9BLjkka77wEmUwedLx46E8qQYUJiig1QlKBXvEWc~1n6tVBo0vqH0oP~~VBU3s5er9MDn14czP65OlSmoRPf8tRGmmu-0kfCQDwE6IKLJFpBlQ0lD8XfO~~z0qqde4jn2XR307ZUH3LzLuOUCq8QZ-8tJXT8XQ20DA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/a3ba/fb02/d8419a666cf582a7686a0c370881b261?Expires=1657497600&Signature=NGhwoznxW-vgPudUXULhJWgP3-A1YjxHSMozefj2hZ0w6SaHR668gN223cUkcyo-marKNohbTzFqaHYA1x6XfybHyr9k4H3ULzi5OhXmJajOZzAXeFm5bEl2RG-uCtirEGXO5T~EwtG7oAuvpxYZ93PMYF6XIg-Qlkrc5LhzYNxijnQ72WG7noqsOSwbX~k2TCzJG~9uPmzsBMCKDN4R9YGiljIBO8zJjiW1WRuz4LyVxsvMBleL0R-GpxTjfaMQ8PicFVvSrmUQBJMLre5pMZTmbbLGMIjRhfI4912daZzE8niGci3H7WJESfKRrkj-7ScS9-9KPvWXXSXszhz8KA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/14f7/4dad/8afebdc2fa83c5dea3837950752cce77?Expires=1657497600&Signature=Ht60inXm2N2uqOOxwlltONT5S4a~LSlg2aEik6R1lt9ovSi0rB8dLA-zMfyF-wESg7RQ1nrGg-MXEySX028wEBQBy4NgOpC9fsU0ZqgUFLgddhEpZGgbQqEbhYMWsCjE4mgN6sQk0A2ysD4ZAXUbsSdJeoOJqzuWM55wd1e-xvn5sMjpTBqW~jj6U~PahtWp8vbuVvP8keqNffebo7PRAVYDQ~oOGlAv7P7hpo0mPWXvoFTyIZrT7qJI62en5vfBnGm02SY-7xurLXulG55X-9lDgttuOJVO41NQTp28RYvtlMagc54P1lWYwdVN9vXpKeSZQrsuKmixgKmjtcVtDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/8fea/66ce/3ddcbf701cc4e0e370e52a43557c2e96?Expires=1657497600&Signature=FSID-NpqcqU19~n4Q8pG-v6~9q6d8m-GwALqOPhYG2~AH1TT1~~Qhh-Q4VSaeE2KKo2fv3HVyq1fWEve8m-YvJ83wADahSca3VUh7JPiftc8jomrMuyayFTyTJMYUAQc~NXJJvpXnmoIKWuG84SRw-CHHt0sVpRWHBdkCAWwgOBPvFtObNqS9BLjkka77wEmUwedLx46E8qQYUJiig1QlKBXvEWc~1n6tVBo0vqH0oP~~VBU3s5er9MDn14czP65OlSmoRPf8tRGmmu-0kfCQDwE6IKLJFpBlQ0lD8XfO~~z0qqde4jn2XR307ZUH3LzLuOUCq8QZ-8tJXT8XQ20DA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </LoungeBearBox>
      </NFTLounge>
      <Benefit>
        <img
          src="https://s3-alpha-sig.figma.com/img/49a4/0082/b88c626fdf2cc2b507becc996504b6d6?Expires=1657497600&Signature=SaEGW0Wr89dt5Vap~nGNeO8gde~~iTBGmVfzIlGJdpk2KrF-QacEjx-OiPPdUfw2rsuswYScA5NKPCJRDn55xwX4-KBlF~JLN-iaR2QqEtyoUXglCY4YLaIiN6EDEkXUuYV~kZ2UtStrJl1n19U1n-caGptAFA90sxyKp~s3JuMMVozpea2R3eMBA9fT0YKJWxKhTy5luh0KG-bF1Wn0Q79S6bxC8XedaADqea7E6C3mV8tCuTWKa5qbC3Zxy96xz44lH3gemAtQjZ2kC0tjnmrnsDmPKC5dImf1RjOghEpBV9pJlOTVMsxyxAMHeL7FfaFyXhKsEpYsH~oDKs7HpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div>
          <h1>곰돌이 아티스트를 위한 혜택!</h1>
          <BenefitBoxContainer>
            <NFTBenefitBox
              title="라운지 재단에서 만든 저작물을 곰돌이 아티스트들의 작품에 상업적으로 자유롭게 활용 할 수 있습니다."
              content="*SHOP페이지에서 무제한 다운로드가 가능합니다."
            />
            <NFTBenefitBox
              title="주문 제작 및 외주 연결을 도와드립니다."
              content="*홀더라면 추가 할인해택으로 주문제작 해드립니다."
            />
            <NFTBenefitBox
              title="라운지 재단에서 곰돌이 아티스트들을 대상으로 툴 지원 이벤트나 공모전을 개최할 예정입니다."
              content=""
            />
            <NFTBenefitBox
              title="다양한 예술활동을 지원하기 위한 자체제작 튜토리얼과 자료들을 공유해드립니다."
              content=""
            />
            <NFTBenefitBox
              title="아티스트들에게 중요한건 바로 인지도!"
              content="*여러분이 열심히 만든 작품이나 NFT를 공식 트위터와 SNS를 통해 홍보해드립니다."
            />
          </BenefitBoxContainer>
        </div>
      </Benefit>
      <RoadMap>
        <h1>
          3D, 폰트, 플러그인, 음악 등을 결합한 올인원 메이커로 디자인 및 <br />
          예술계의 혁신을 주도합니다.
        </h1>
        <TobeArtistBox>
          <img
            src="https://s3-alpha-sig.figma.com/img/d2da/ca15/a5f7465f32367a8d88c5626285da91b6?Expires=1657497600&Signature=b3f~wqrCu4Vuc5J-OSHWh6U9o3h8OdjyVceqGWh1G6UYK~BKM-ZPS~2gjWoGvpBIlrmRFwagOypGzIvaxUSVRaEHPs8R8bAZwSnmI9XiKFUycwofAoeaEYF-aBN5pd2J1C9b3x7a4e1mGtBJcxCTGG6ot~DqMnE8L98ytVQNRNeJ3WjfeYFWrGLSHfFwvhvozY51qS5WD42bCfJ340Ggsy870-7EZOV5MTqgenaC9npoMkNCnv9-zXwQtYFhCOPi6Cu3NqwcA8qK1tmbX9y~UXKp3W9pXxEbL8jE26fWmWOId-jwzM9E5W49gnPPiiXiYzPRu3Eh4mUbjTcrV6EhMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <div>
            <h2>곰돌이 아티스트가 되고 싶다면?</h2>
            <p>
              기술과 사람으로 더 나은 세상을 만듭니다. <br />
              크리에이터 베어 라운지는 곰돌이 아티스트(홀더)들의 창작활동을
              지원하며 <br />
              함께 성장해 나가는 것을 목표로 합니다.
            </p>
            <button type="button">
              OPEN SEA
              <svg
                width="20"
                height="11"
                viewBox="0 0 28 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 9.5H25.5L17 1" stroke="#27231F" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </TobeArtistBox>
        <h1>Road Map</h1>
        <span>
          로드맵은 홀더들의 의견에 따라 유동적으로 추가 될 수 있습니다.
        </span>
        <RoadMapBoxes>
          <NFTRoadMapBox
            title="곰돌이 아티스트가 
되고 싶다면?"
            content="크리에이터 베어 라운지는
곰돌이 아티스트(홀더)들의
창작활동을 지원하며
함께 성장해 나가는 것을 목표로 합니다."
          />
          <NFTRoadMapBox
            title="곰돌이 아티스트가
되고 싶다면?"
            content="크리에이터 베어 라운지는
곰돌이 아티스트(홀더)들의
창작활동을 지원하며
함께 성장해 나가는 것을 목표로 합니다."
          />
          <NFTRoadMapBox
            title="곰돌이 아티스트가
되고 싶다면?"
            content="크리에이터 베어 라운지는
곰돌이 아티스트(홀더)들의
창작활동을 지원하며
함께 성장해 나가는 것을 목표로 합니다."
          />
          <NFTRoadMapBox
            title="곰돌이 아티스트가
되고 싶다면?"
            content="크리에이터 베어 라운지는
곰돌이 아티스트(홀더)들의
창작활동을 지원하며
함께 성장해 나가는 것을 목표로 합니다."
          />
        </RoadMapBoxes>
      </RoadMap>
      <Shop>
        <h1>
          CREATOR BEAR LOUNGE <span>SHOP</span>
        </h1>
        <p>곰돌이 아티스트들의 작품을 지금 바로 만나보세요!</p>
        <CategoryContainer>
          <UpperCategoryBox>
            <NFTCategoryBox category="대규모 마인크래프트 맵" />
            <NFTCategoryBox category="번들 및 중규모 마인크래프트 맵" />
            <NFTCategoryBox category="음악" />
            <NFTCategoryBox category="배경음악" />
            <NFTCategoryBox category="복쉘 아트워크 obj" />
          </UpperCategoryBox>
          <LowerCategoryBox>
            <NFTCategoryBox category="대규모 마인크래프트 맵" />
            <NFTCategoryBox category="번들 및 중규모 마인크래프트 맵" />
            <NFTCategoryBox category="음악" />
            <NFTCategoryBox category="배경음악" />
            <NFTCategoryBox category="복쉘 아트워크 obj" />
          </LowerCategoryBox>
        </CategoryContainer>
        <ShopBanner>
          <span>💡</span>
          <p>
            메타버스 맵, 음악, 모델링, 폰트 등 <br />
            다양한 자료를 무제한 다운로드 받으세요!
          </p>
        </ShopBanner>
      </Shop>
    </>
  );
};

export default NFTPage;

const NFTHead = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  img {
    width: 100%;
    min-width: 1569px;
    top: -400px;
    position: fixed;
    z-index: -99;
  }
`;

const NFTLounge = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background-color: white;
  overflow: hidden;

  h1 {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 74px;
    letter-spacing: -0.02em;
    color: #27231f;
  }
  p {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 180%;
    letter-spacing: -0.02em;
    color: #27231f;
  }
`;

const LoungeIntroBox = styled.div`
  position: absolute;
  width: 861px;
  height: 129px;
  left: 123px;
  top: 74px;
`;

const LoungeBearBox = styled.div`
  display: flex;
  position: absolute;
  left: -144px;
  top: 330px;

  img {
    width: 267px;
    height: 267px;
    border-radius: 16px;
    margin-right: 20px;
  }
`;

const Benefit = styled.div`
  width: 100%;
  height: 770px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  img {
    width: 100%;
    min-width: 1569px;
    top: -400px;
    position: fixed;
    z-index: -99;
  }
  h1 {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 50px;
    letter-spacing: -0.02em;
    color: #f6f3ec;
    text-align: center;
    padding-top: 70px;
  }
`;

const BenefitBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const RoadMap = styled.div`
  width: 100%;
  height: 1400px;
  background-color: white;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  color: #27231f;
  h1 {
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    margin-left: 100px;
    padding-top: 100px;
  }
  img {
    width: 450px;
    height: 400px;
    border-radius: 16px;
  }
  span {
    float: right;
    margin-right: 130px;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #796958;
  }
`;

const TobeArtistBox = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 70px;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
  }
  h2 {
    margin-top: 50px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 74px;
    letter-spacing: -0.02em;
  }
  p {
    font-weight: 400;
    line-height: 180%;
  }
  button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    width: 150px;
    height: 36px;
    border: none;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 50px;
    margin-left: -8px;
    svg {
      margin-left: 20px;
      margin-top: 2px;
    }
  }
`;

const RoadMapBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`;

const Shop = styled.div`
  width: 100%;
  height: 970px;
  background: #f6f3ec;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  color: #27231f;
  h1 {
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 74px;
    letter-spacing: -0.02em;
    text-align: center;
    padding-top: 80px;
    span {
      font-weight: 700;
    }
  }
  > p {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const CategoryContainer = styled.div`
  margin-top: 80px;
`;

const UpperCategoryBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LowerCategoryBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ShopBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 341px;
  height: 81px;
  background: #ffffff;
  box-shadow: 4px 10px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-top: 30px;
  > span {
    font-size: 1.6rem;
    margin-right: 40px;
  }
  > p {
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #796958;
  }
`;

import React from 'react';
import styled from 'styled-components';

// 디자인 사이즈 임의 조정 -> 추후 수정 예정

const NFTPage: React.FC = () => {
  return (
    <>
      <NFTHead>
        <img
          src="https://s3-alpha-sig.figma.com/img/49a4/0082/b88c626fdf2cc2b507becc996504b6d6?Expires=1657497600&Signature=SaEGW0Wr89dt5Vap~nGNeO8gde~~iTBGmVfzIlGJdpk2KrF-QacEjx-OiPPdUfw2rsuswYScA5NKPCJRDn55xwX4-KBlF~JLN-iaR2QqEtyoUXglCY4YLaIiN6EDEkXUuYV~kZ2UtStrJl1n19U1n-caGptAFA90sxyKp~s3JuMMVozpea2R3eMBA9fT0YKJWxKhTy5luh0KG-bF1Wn0Q79S6bxC8XedaADqea7E6C3mV8tCuTWKa5qbC3Zxy96xz44lH3gemAtQjZ2kC0tjnmrnsDmPKC5dImf1RjOghEpBV9pJlOTVMsxyxAMHeL7FfaFyXhKsEpYsH~oDKs7HpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div />
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
    </>
  );
};

export default NFTPage;

const NFTHead = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    min-width: 1569px;
    top: -400px;
    position: fixed;
    z-index: -99;
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

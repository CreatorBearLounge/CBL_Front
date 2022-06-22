import React from 'react';
import styled from 'styled-components';
import AssetDownloadBtn from '../Atoms/AssetDownloadBtn';
import AuthorProfile from '../Molecules/AuthorProfile';
import DetailBox from '../Organisms/DetailBox';
import AuthorAnotherAssets from '../Molecules/AuthorAnotherAssets';

// 해당 템플릿은 데이터가 들어있다는 가정 하에 작성되었음. 수정 예정
const ShopDetailTemplate: React.FC = () => {
  return (
    <>
      <AssetDetailHeader>
        <AssetHeader>
          <AssetHeaderText>
            <AssetNameText>반 고흐 해바라기</AssetNameText>
            <AssetAuthorText>제작 | GBF STUDIO</AssetAuthorText>
          </AssetHeaderText>
          <AssetDownloadBtn
            width={96}
            height={44}
            backColor="#ecd9b2"
            textColor="#796958"
            fontSize={16}
            text="1364"
          />
        </AssetHeader>
        <div className="line" />
        <AssetDetailTextBox>
          <p>대규모 마인크래프트 맵</p>
          <p>21. 05. 30</p>
        </AssetDetailTextBox>
      </AssetDetailHeader>
      <AssetContent>
        <AssetDetailRight>
          <AssetIamge
            src="https://www.koreaminecraft.net/files/attach/images/2629848/295/079/001/248499a39fa772cefa6756161c1063bc.png"
            alt="asset"
          />
          <p>조회 2,364</p>
        </AssetDetailRight>
        <AssetDetailContent>
          <AssetIamgeDetailUl>
            <li>
              <AssetImageDetail src="https://www.koreaminecraft.net/files/attach/images/2629848/295/079/001/248499a39fa772cefa6756161c1063bc.png" />
            </li>
            <li>
              <AssetImageDetail src="https://www.koreaminecraft.net/files/attach/images/2629848/295/079/001/248499a39fa772cefa6756161c1063bc.png" />
            </li>
            <li>
              <AssetImageDetail src="https://www.koreaminecraft.net/files/attach/images/2629848/295/079/001/248499a39fa772cefa6756161c1063bc.png" />
            </li>
            <li>
              <AssetImageDetail src="https://www.koreaminecraft.net/files/attach/images/2629848/295/079/001/248499a39fa772cefa6756161c1063bc.png" />
            </li>
          </AssetIamgeDetailUl>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            elementum ultrices montes, phasellus. Rutrum massa pharetra nunc
            suspendisse augue. Nam feugiat in tempus, ut accumsan non. At donec
            eget aenean dui volutpat sed varius elementum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            elementum ultrices montes, phasellus. Rutrum massa pharetra nunc
            suspendisse augue. Nam feugiat in tempus, ut accumsan non. At donec
            eget aenean dui volutpat sed varius elementum.
          </p>
          <AssetDownloadBtn
            width={180}
            height={46}
            backColor="#ecd9b2"
            textColor="#796958"
            fontSize={16}
            text="작품 다운로드"
          />
        </AssetDetailContent>
      </AssetContent>
      <div className="line" />
      <DetailBox
        Author="GBF Studio"
        title="작가의 프로필"
        link="/"
        content={<AuthorProfile />}
        linkName="바로가기"
        isLink
      />
      <div className="line" />
      <DetailBox
        Author="GBF Studio"
        title="작가의 다른 작품"
        link="/"
        content={<AuthorAnotherAssets />}
        linkName="더보기"
        isLink
      />
    </>
  );
};

export default ShopDetailTemplate;

const AssetHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const AssetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const AssetNameText = styled.span`
  font-family: 'Noto Sans CJK KR';
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #ecd9b2;
  margin-bottom: 4px;
`;

const AssetAuthorText = styled.span`
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #ecd9b2;
`;

const AssetDetailTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  p {
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: 500;
    color: #a7a7a7;
  }
`;

const AssetDetailHeader = styled.div`
  margin-bottom: 110px;
`;

const AssetContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const AssetIamge = styled.img`
  width: 600px;
  height: 710.8px;
  margin-right: 86px;
`;

const AssetIamgeDetailUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 94px;
`;

const AssetImageDetail = styled.img`
  width: 122px;
  height: 122px;
  border-radius: 16px;
`;

const AssetDetailContent = styled.div`
  > p {
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-bottom: 72px;
  }
  > p:first-of-type {
    margin-bottom: 38px;
  }
`;

const AssetDetailRight = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: 'Noto Sans CJK KR';
    font-size: 14px;
    font-weight: normal;
    letter-spacing: -0.28px;
    color: #a7a7a7;
    margin-top: 36.2px;
    margin-bottom: 66px;
  }
`;

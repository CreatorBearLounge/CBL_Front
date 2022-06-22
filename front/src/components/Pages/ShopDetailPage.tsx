import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AssetDownloadBtn from '../Atoms/AssetDownloadBtn';
import AuthorProfile from '../Molecules/AuthorProfile';
import DetailBox from '../Organisms/DetailBox';
import AuthorAnotherAssets from '../Molecules/AuthorAnotherAssets';
import { Arts } from '../../common/dummy';

const ShopDetailPage: React.FC = () => {
  const { artsId } = useParams();
  const data = Arts[Number(artsId) || 0];
  return (
    <>
      <AssetDetailHeader>
        <AssetHeader>
          <AssetHeaderText>
            <AssetNameText>{data.ArtsName}</AssetNameText>
            <AssetAuthorText>제작 | {data.Author}</AssetAuthorText>
          </AssetHeaderText>
          <AssetDownloadBtn
            width={96}
            height={44}
            backColor="#ecd9b2"
            textColor="#796958"
            fontSize={1}
            text={`${data.CountDownload}`}
            link={data.DownloadUrl}
          />
        </AssetHeader>
        <div className="line" />
        <AssetDetailTextBox>
          <p>{data.ArtsCategoryName}</p>
          <p>{data.ArtsTime}</p>
        </AssetDetailTextBox>
      </AssetDetailHeader>
      <AssetContent>
        <AssetDetailRight>
          <AssetIamge src={data.ArtsDetailImage} alt="asset" />
          <p>조회 {data.ArtsViews}</p>
        </AssetDetailRight>
        <AssetDetailContent>
          <AssetIamgeDetailUl>
            <li>
              <AssetImageDetail src={data.ArtsDetailImage} />
            </li>
            <li>
              <AssetImageDetail src={data.ArtsDetailImage} />
            </li>
            <li>
              <AssetImageDetail src={data.ArtsDetailImage} />
            </li>
            <li>
              <AssetImageDetail src={data.ArtsDetailImage} />
            </li>
          </AssetIamgeDetailUl>
          <p>{data.ArtsDetail}</p>
          <p>{data.ArtsDetail}</p>
          <AssetDownloadBtn
            width={180}
            height={46}
            backColor="#ecd9b2"
            textColor="#796958"
            fontSize={1}
            text="작품 다운로드"
            link={data.DownloadUrl}
          />
        </AssetDetailContent>
      </AssetContent>
      <div className="line" />
      <DetailBox
        Author={data.Author}
        title="작가의 프로필"
        link="/"
        content={<AuthorProfile />}
        linkName="바로가기"
        isLink
      />
      <div className="line" />
      <DetailBox
        Author={data.Author}
        title="작가의 다른 작품"
        link="/"
        content={<AuthorAnotherAssets />}
        linkName="더보기"
        isLink
      />
    </>
  );
};

export default ShopDetailPage;

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
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #ecd9b2;
  margin-bottom: 4px;
`;

const AssetAuthorText = styled.span`
  font-family: 'Noto Sans CJK KR';
  font-size: 1rem;
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
    font-size: 1rem;
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
    font-size: 1rem;
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
    font-size: 0.875rem;
    font-weight: normal;
    letter-spacing: -0.28px;
    color: #a7a7a7;
    margin-top: 36.2px;
    margin-bottom: 66px;
  }
`;

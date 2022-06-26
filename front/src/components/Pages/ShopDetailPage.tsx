import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AssetDownloadBtn from '../Atoms/AssetDownloadBtn';
import AuthorProfile from '../Molecules/AuthorProfile';
import DetailBox from '../Organisms/DetailBox';
import AuthorAnotherAssets from '../Molecules/AuthorAnotherAssets';
import { Arts } from '../../common/dummy';
import AssetDetail from '../Organisms/AssetDetail';

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
      <AssetDetail
        image={data.ArtsDetailImage}
        views={data.ArtsViews}
        detail={data.ArtsDetail}
        downloadUrl={data.DownloadUrl}
        category={data.ArtsCategoryName}
      />
      <div className="line" />
      <DetailContents>
        <DetailBox
          Author={data.Author}
          title="작가의 프로필"
          link={`/artist/${data.Author}`}
          content={<AuthorProfile />}
          linkName="바로가기"
        />
      </DetailContents>
      <div className="line" />
      <DetailContents>
        <DetailBox
          Author={data.Author}
          title="작가의 다른 작품"
          link={`/artist/${data.Author}`}
          content={<AuthorAnotherAssets author={data.Author} isProfile />}
          linkName="더보기"
        />
      </DetailContents>
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
  width: 387px;
`;

const AssetAuthorText = styled.span`
  font-family: 'Noto Sans CJK KR';
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #ecd9b2;
  width: 122px;
`;

const AssetDetailTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  min-width: 400px;
  p {
    font-family: 'Noto Sans CJK KR';
    font-size: 1rem;
    font-weight: 500;
    color: #a7a7a7;
    width: auto;
    width: 200px;
  }
  p:nth-of-type(2) {
    text-align: right;
  }
`;

const AssetDetailHeader = styled.div`
  margin-bottom: 110px;
`;

const DetailContents = styled.div`
  margin-top: 70px;
  margin-bottom: 108px;
`;

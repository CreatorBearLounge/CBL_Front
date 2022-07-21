import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AssetDownloadBtn from '../Atoms/AssetDownloadBtn';
import AuthorProfile from '../Molecules/AuthorProfile';
import DetailBox from '../Organisms/DetailBox';
import AuthorAnotherAssets from '../Molecules/AuthorAnotherAssets';
import AssetDetail from '../Organisms/AssetDetail';

type ArtsInterface = {
  id: number;
  title: string;
  categoryId: number;
  artistId: number;
  date: string;
  description: string;
  viewCount: number;
  downloadCount: number;
  downloadUserId: number;
  thumbnail: string;
  downloadUrl: string;
};

type ArtistInterface = {
  id: number;
  name: string;
  description: string;
  resume: string;
  profile: string;
};

const ShopDetailPage: React.FC = () => {
  const { artsId } = useParams();
  const [shopData, setShopData] = useState<ArtsInterface>(Object);
  const [artistData, setArtistData] = useState<ArtistInterface>(Object);
  const [artistArtsData, setArtistArtsData] = useState<ArtsInterface[]>([]);
  const ShopDetailAxios = () => {
    return axios.get(`http://localhost:8080/shop/arts/detail/${artsId}`);
  };

  useEffect(() => {
    ShopDetailAxios().then((res) => {
      setShopData(res.data[0]);
      setArtistData(res.data[1]);
      setArtistArtsData(res.data[2]);
    });
  }, []);

  return (
    <>
      <AssetDetailHeader>
        <AssetHeader>
          <AssetHeaderText>
            <AssetNameText>{shopData.title}</AssetNameText>
            <AssetAuthorText>제작 | {artistData.name}</AssetAuthorText>
          </AssetHeaderText>
          <AssetDownloadBtn
            width={96}
            height={44}
            backColor="#ecd9b2"
            textColor="#796958"
            fontSize={1}
            text={`${shopData.downloadCount}`}
            link={shopData.downloadUrl}
          />
        </AssetHeader>
        <div className="line" />
        <AssetDetailTextBox>
          <p>{shopData.categoryId}</p>
          <p>{shopData.date}</p>
        </AssetDetailTextBox>
      </AssetDetailHeader>
      <AssetDetail
        image={shopData.thumbnail}
        views={shopData.viewCount}
        detail={shopData.description}
        downloadUrl={shopData.downloadUrl}
        category={shopData.categoryId}
      />
      <div className="line" />
      <DetailContents>
        <DetailBox
          Author={artistData.name}
          title="작가의 프로필"
          link={`/artist/${artistData.id}`}
          content={<AuthorProfile />}
          linkName="바로가기"
        />
      </DetailContents>
      <div className="line" />
      <DetailContents>
        <DetailBox
          Author={artistData.name}
          title="작가의 다른 작품"
          link={`/artist/${artistData.id}`}
          content={<AuthorAnotherAssets isProfile arts={artistArtsData} />}
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

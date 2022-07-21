import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AuthorAnotherAssets from '../Molecules/AuthorAnotherAssets';
import AuthorProfile from '../Molecules/AuthorProfile';
import DetailBox from '../Organisms/DetailBox';

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

const AuthorProfilePage: React.FC = () => {
  const { artistId } = useParams();
  const [artistData, setArtistData] = useState<ArtistInterface>(Object);
  const [artistArtsData, setArtistArtsData] = useState<ArtsInterface[]>([]);

  const ArtistDetailAxios = () => {
    return axios.get(`http://localhost:8080/shop/artist/${artistId}`);
  };

  useEffect(() => {
    ArtistDetailAxios().then((res) => {
      setArtistData(res.data[0]);
      setArtistArtsData(res.data[1]);
    });
  }, []);
  return (
    <div>
      <DetailContents>
        <DetailBox
          Author={artistData.name}
          title="작가의 프로필"
          content={<AuthorProfile />}
          linkName="바로가기"
        />
      </DetailContents>
      <div className="line" />
      <DetailContents>
        <DetailBox
          Author={artistData.name}
          title="작가의 다른 작품"
          content={
            <AuthorAnotherAssets isProfile={false} arts={artistArtsData} />
          }
          linkName="바로가기"
        />
      </DetailContents>
    </div>
  );
};

export default AuthorProfilePage;

const DetailContents = styled.div`
  margin-bottom: 64px;
  &:not(:first-of-type) {
    margin-top: 46px;
  }
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AssetThumbBox from '../Atoms/AssetThumbBox';

interface MainCategoryType {
  category: number;
}

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

const MainCategoryBox: React.FC<MainCategoryType> = ({ category }) => {
  const CategoryDetailAxios = () => {
    return axios.get(`http://localhost:8080/shop/category/${category}`);
  };
  const [artsData, setArtsData] = useState<ArtsInterface[]>([]);
  useEffect(() => {
    CategoryDetailAxios().then((res) => {
      setArtsData(res.data[2]);
    });
  }, []);

  return (
    <AssetWrapper>
      {artsData.slice(0, 2).map((el) => (
        <AssetList key={el.id}>
          <AssetThumbBox
            image={el.thumbnail}
            width="311"
            height="311"
            id={el.id}
            title={el.title}
            author={el.artistId.toString()}
            date={el.date}
            views={el.viewCount}
          />
        </AssetList>
      ))}
    </AssetWrapper>
  );
};

export default MainCategoryBox;

const AssetWrapper = styled.ul`
  width: 100%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
`;

const AssetList = styled.li`
  width: calc(50% - 10px);
  position: relative;
  margin-bottom: 20px;
  &:nth-of-type(2) {
    margin-right: 0;
  }
  &:not(:nth-of-type(2n)) {
    margin-right: 20px;
  }
`;

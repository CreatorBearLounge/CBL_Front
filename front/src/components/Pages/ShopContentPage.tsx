import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TitleAtom from '../Atoms/TitleAtom';
import Pagination from '../Molecules/Pagination';

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

const ShopContentPage: React.FC = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState('');
  const [categoryDes, setCategoryDes] = useState('');
  const [artsData, setArtsData] = useState<ArtsInterface[]>([]);
  const CategoryDetailAxios = () => {
    return axios.get(`http://localhost:8080/shop/category/${category}`);
  };

  useEffect(() => {
    CategoryDetailAxios().then((res) => {
      setCategoryData(res.data[0]);
      setCategoryDes(res.data[1]);
      setArtsData(res.data[2]);
    });
  }, [category]);

  return (
    <>
      <TitleAtom menuTitle={categoryData} menuContent={categoryDes} />
      <ThumbnailBox>
        <Pagination arts={artsData} />
      </ThumbnailBox>
    </>
  );
};

export default ShopContentPage;

const ThumbnailBox = styled.div`
  width: 1237px;
  height: 1230.5px;
  margin: 83px 143px 60.5px 0px;
  padding: 0 0 312.3px;
`;

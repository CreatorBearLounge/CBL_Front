import React from 'react';
import styled from 'styled-components';
import Pagination from '../Molecules/Pagination';
import Title from '../Molecules/Title';

const ShopContent = () => {
  return (
    <>
      <Title />
      <ThumbnailBox>
        <Pagination />
      </ThumbnailBox>
    </>
  );
};

export default ShopContent;

const ThumbnailBox = styled.div`
  width: 1237px;
  height: 1230.5px;
  margin: 83px 143px 60.5px 0px;
  padding: 0 0 312.3px;
`;

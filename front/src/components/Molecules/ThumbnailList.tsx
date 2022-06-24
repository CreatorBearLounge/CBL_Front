import React from 'react';
import styled from 'styled-components';
import ThumbnailPagination from '../Atoms/ThumbnailPagination';
import Title from './Title';

const ThumbnailList = () => {
  return (
    <>
      <Title />
      <ThumbnailBox>
        <ThumbnailPagination />
      </ThumbnailBox>
    </>
  );
};

export default ThumbnailList;

const ThumbnailBox = styled.div`
  width: 1237px;
  height: 1230.5px;
  margin: 50px 143px 60.5px 0px;
  padding: 0 0 312.3px;
`;

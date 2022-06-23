import React from 'react';
import styled from 'styled-components';
import ThumbnailAtom from '../Atoms/ThumbnailAtom';
import Title from './Title';

const ThumbnailList = () => {
  return (
    <ThumbnailBox>
      <Title />
      <ThumbnailAtom />
    </ThumbnailBox>
  );
};

export default ThumbnailList;

const ThumbnailBox = styled.div`
  /* margin-top: 50px; */
`;

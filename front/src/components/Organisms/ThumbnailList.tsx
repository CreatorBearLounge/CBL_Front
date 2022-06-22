import React from 'react';
import styled from 'styled-components';
import ThumbnailAtom from '../Atoms/ThumbnailAtom';

const ThumbnailList = () => (
  <ThumbnailBox>
    <ThumbnailAtom />
  </ThumbnailBox>
);

export default ThumbnailList;

const ThumbnailBox = styled.div`
  margin-top: 50px;
`;

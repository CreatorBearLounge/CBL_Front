import React from 'react';
import styled from 'styled-components';
import AssetThumbBox from '../Atoms/AssetThumbBox';
import { anotherAssetData } from '../../common/dummy';

const AuthorAnotherAssets: React.FC = () => {
  return (
    <AssetWrapper>
      {anotherAssetData.map((row) => (
        <AssetList key={row.id}>
          <AssetThumbBox image={row.img} width="294" height="294" />
        </AssetList>
      ))}
    </AssetWrapper>
  );
};

export default AuthorAnotherAssets;

const AssetWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const AssetList = styled.li`
  width: calc(25% - 15px);
  position: relative;
  margin-bottom: 20px;
  &:nth-of-type(4) {
    margin-right: 0;
  }
  &:not(:nth-of-type(4n)) {
    margin-right: 20px;
  }
`;

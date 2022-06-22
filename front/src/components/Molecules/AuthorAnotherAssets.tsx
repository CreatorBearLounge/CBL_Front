import React from 'react';
import styled from 'styled-components';
import AuthorAnotherAsset from '../Atoms/AuthorAnotherAsset';
import { anotherAssetData } from '../../common/dummy';

const AuthorAnotherAssets: React.FC = () => {
  return (
    <AssetWrapper>
      {anotherAssetData.map((row) => (
        <AssetList key={row.id}>
          <AuthorAnotherAsset image={row.img} />
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

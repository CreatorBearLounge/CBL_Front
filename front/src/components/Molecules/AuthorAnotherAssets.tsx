import React from 'react';
import styled from 'styled-components';
import AssetThumbBox from '../Atoms/AssetThumbBox';
import { Arts } from '../../common/dummy';

interface AuthorAssetType {
  author: string;
  isProfile: boolean;
}

const AuthorAnotherAssets: React.FC<AuthorAssetType> = ({
  author,
  isProfile,
}) => {
  return (
    <AssetWrapper>
      {Arts.filter((el) => el.Author === author)
        .slice(0, isProfile ? 8 : Arts.length)
        .map((row) => (
          <AssetList key={row.ArtsId}>
            <AssetThumbBox
              image={row.ArtsDetailImage}
              width="294"
              height="294"
              id={row.ArtsId}
              title={row.ArtsName}
              author={row.Author}
              date={row.ArtsTime}
              views={row.ArtsViews}
            />
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

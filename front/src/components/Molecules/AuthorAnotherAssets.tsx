import React from 'react';
import styled from 'styled-components';
import AssetThumbBox from '../Atoms/AssetThumbBox';
import { Arts } from '../../common/dummy';

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

interface AuthorAssetType {
  isProfile: boolean;
  arts: Array<ArtsInterface>;
}

const AuthorAnotherAssets: React.FC<AuthorAssetType> = ({
  isProfile,
  arts,
}) => {
  return (
    <AssetWrapper>
      {arts.slice(0, isProfile ? 8 : Arts.length).map((row) => (
        <AssetList key={row.id}>
          <AssetThumbBox
            image={row.thumbnail}
            width="294"
            height="294"
            id={row.id}
            title={row.title}
            author={row.artistId.toString()}
            date={row.date}
            views={row.viewCount}
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

import React from 'react';
import styled from 'styled-components';
import NTFShopThumbBox from '../Atoms/NTFShopThumbBox';
import { Arts } from '../../common/dummy';

interface MainCategoryType {
  category: string;
}

const NFTCategoryBox: React.FC<MainCategoryType> = ({ category }) => {
  const sameCategory = Arts.filter((el) => el.ArtsCategoryName === category);

  return (
    <AssetWrapper>
      {sameCategory
        .splice(Math.floor(Math.random() * sameCategory.length), 1)
        .map((el) => (
          <AssetList key={el.ArtsId}>
            <NTFShopThumbBox
              image={el.ArtsDetailImage}
              width="200"
              height="200"
              id={el.ArtsId}
              category={el.ArtsCategoryName}
            />
          </AssetList>
        ))}
    </AssetWrapper>
  );
};

export default NFTCategoryBox;

const AssetWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  &:nth-child(even) {
    margin-top: 20px;
  }
  margin-bottom: 20px;
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

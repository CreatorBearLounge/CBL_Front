import React from 'react';
import styled from 'styled-components';
import AssetThumbBox from '../Atoms/AssetThumbBox';
import { Arts } from '../../common/dummy';

interface MainCategoryType {
  category: string;
}

const MainCategoryBox: React.FC<MainCategoryType> = ({ category }) => {
  return (
    <AssetWrapper>
      {Arts.filter((el) => el.ArtsCategoryName === category)
        .slice(0, 2)
        .map((el) => (
          <AssetList key={el.ArtsId}>
            <AssetThumbBox
              image={el.ArtsDetailImage}
              width="311"
              height="311"
              id={el.ArtsId}
              title={el.ArtsName}
              author={el.Author}
              date={el.ArtsTime}
              views={el.ArtsViews}
            />
          </AssetList>
        ))}
    </AssetWrapper>
  );
};

export default MainCategoryBox;

const AssetWrapper = styled.ul`
  width: 100%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
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

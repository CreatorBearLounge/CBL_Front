import React from 'react';
import styled from 'styled-components';
import AssetThumbBox from '../Atoms/AssetThumbBox';

const MainCategoryBox: React.FC = () => {
  return (
    <AssetWrapper>
      <AssetList>
        <AssetThumbBox
          image="https://s3-alpha-sig.figma.com/img/9c24/51bb/2d4668f90980e21fb007667fd4fdc1bc?Expires=1656892800&Signature=Ahg7s1BKWDCdTFn0lkMx42pC70VedGKafn~KeMDRkBJ1N1GvBTFqRHsY0qc5xes8Sz43vRSa~Y12hi6miA-fC-lsCGujsNLqdyWsxZ15ehUOojBSAD9QtHqvA7Sh0vxnmPhrJVSI-K4ZurDjPx5osTEucv7WqjUFJ9uZRMrtEmWq9Od3ws6qwJ8YNEz2qFCYrPZkts1CQweALAdWH8Po2NYTvYFMDIVzFSz~BVnTDR3u83MFfcBCg19F6oOHp2EnlxdWH4wH8cuKheilUOfoWuEGJ3lTfL7bqaxt-kVM09glsusxoq9p9D7u2kFAAsX95MIOK-3gaM75Po3UPj8mmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          width="311"
          height="311"
        />
      </AssetList>
      <AssetList>
        <AssetThumbBox
          image="https://s3-alpha-sig.figma.com/img/6104/77d1/55cb79c582103782fecc033f94f4507d?Expires=1656892800&Signature=Iak070ZFpUc7wRRzp3OMGryZ5cNi4O1QtYdKfGic1tHZ9HA0CNc~z5w4oHsROKY4xLJI5gjrPx3S5Qxz2T7eHKWRnOYRSVymcUZmAphXl9mkmbMWG7Ez2aVVjxHt7V43g6xXkdiGoIV4DiHtLCSgtDldaxO-WIoZfDWft2boPIIjZAOuzE8cCBPR3Em22LJJRklWLvneK0PoY7cYdf4kDnpAfenbMbm1pRalTQ5gd5fUMLiCdC~UaRXJmJgJI8Usy0yRb6tBtssgUMtY91BJHHVlWgLoM4V7-5sFtE7rDhmFzntBDZOZfCt7eo0K~H4XCrCiWXx80eEuB5yJPDGN3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          width="311"
          height="311"
        />
      </AssetList>
    </AssetWrapper>
  );
};

export default MainCategoryBox;

const AssetWrapper = styled.ul`
  width: 100%;
  height: 100%;
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

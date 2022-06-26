import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AssetDownloadBtn from '../Atoms/AssetDownloadBtn';

interface AssetDetailType {
  image: string;
  views: number;
  detail: string;
  downloadUrl: string;
  category: string;
}

interface boxSizeStyle {
  size: string;
}

const AssetDetail: React.FC<AssetDetailType> = ({
  image,
  views,
  detail,
  downloadUrl,
  category,
}) => {
  const [size, setSize] = useState('height');
  useEffect(() => {
    const img = new Image();
    img.src = image;
    if (img.width < img.height) {
      setSize('width');
    } else {
      setSize('height');
    }
  }, [image]);
  return (
    <AssetContent>
      <AssetDetailRight>
        {category === '음악' || category === '배경음악' ? (
          <AssetMusicImage size={size}>
            <BlackBox />
            <img src={image} alt="music" />
          </AssetMusicImage>
        ) : (
          <AssetImageWrapper>
            <AssetIamge src={image} alt="asset" size={size} />
          </AssetImageWrapper>
        )}

        <p>
          조회{' '}
          {views.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </AssetDetailRight>
      <AssetDetailContent>
        {category === '음악' || category === '배경음악' ? null : (
          <AssetIamgeDetailUl>
            <li>
              <AssetImageDetail src={image} />
            </li>
            <li>
              <AssetImageDetail src={image} />
            </li>
            <li>
              <AssetImageDetail src={image} />
            </li>
            <li>
              <AssetImageDetail src={image} />
            </li>
          </AssetIamgeDetailUl>
        )}
        <p>{detail}</p>
        <p>{detail}</p>
        <AssetDownloadBtn
          width={180}
          height={46}
          backColor="rgba(0, 0, 0, 0);"
          textColor="#ecd9b2;"
          fontSize={1}
          text="작품 다운로드"
          link={downloadUrl}
        />
      </AssetDetailContent>
    </AssetContent>
  );
};

export default AssetDetail;

const AssetContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const AssetImageWrapper = styled.div`
  width: 600px;
  height: 710.8px;
  margin-right: 86px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AssetIamge = styled.img<boxSizeStyle>`
  object-fit: cover;
  ${(props) => props.size}: 100%;
`;

const AssetIamgeDetailUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 94px;
  width: 551px;
  margin-top: -101px;
  li {
    width: 122px;
  }
`;

const AssetImageDetail = styled.img`
  width: 122px;
  height: 122px;
  border-radius: 16px;
`;

const AssetDetailContent = styled.div`
  margin-top: 101px;
  > p {
    font-family: 'Noto Sans CJK KR';
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-bottom: 72px;
  }
  > p:first-of-type {
    margin-bottom: 38px;
  }
`;

const AssetDetailRight = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: 'Noto Sans CJK KR';
    font-size: 0.875rem;
    font-weight: normal;
    letter-spacing: -0.28px;
    color: #a7a7a7;
    margin-top: 36.2px;
    margin-bottom: 66px;
  }
`;

const AssetMusicImage = styled.div<boxSizeStyle>`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    object-fit: cover;
    ${(props) => props.size}: 100%;
    object-position: center center;
    z-index: 0;
  }
`;

const BlackBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 6;
  width: 600px;
  height: 600px;
  position: absolute;
`;

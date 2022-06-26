import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface assetCardType {
  image: string;
  width: string;
  height: string;
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

interface assetCardStyle {
  width: string;
  height: string;
}

interface boxSizeStyle {
  size: string;
}

const AssetThumbBox: React.FC<assetCardType> = ({
  image,
  width,
  height,
  id,
  title,
  author,
  date,
  views,
}) => {
  const [size, setSize] = useState('height');
  useEffect(() => {
    const img = new Image();
    img.src = image;
    if (img.width > img.height) {
      setSize('height');
    } else {
      setSize('width');
    }
  });

  return (
    <CardStyle width={width} height={height} to={`/shop/arts/${id}`}>
      <CardImage src={image} alt="사아진" size={size} />
      <ArtIntro>
        <IntroBox>
          <ArtTitle>{title}</ArtTitle>
          <Artist>제작 | {author}</Artist>
          <DateAndView>
            등록일 {date} | 조회수{' '}
            {views.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </DateAndView>
        </IntroBox>
      </ArtIntro>
    </CardStyle>
  );
};

export default AssetThumbBox;

const CardStyle = styled(Link)<assetCardStyle>`
  border-radius: 16px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  display: block;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardImage = styled.img<boxSizeStyle>`
  object-fit: cover;
  height: 100%;
  ${(props) => props.size}: 100%;
  transform: scale(1);
`;

const ArtIntro = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 300ms ease-in-out;
  opacity: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const IntroBox = styled.div`
  height: 100%;
  width: calc(100% - 25px);
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArtTitle = styled.h2`
  width: 230px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 35px;
  flex-grow: 0;
  font-family: NotoSansCJKKR;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #ecd9b2;
`;

const Artist = styled.p`
  width: 113.1px;
  height: 22.3px;
  flex-grow: 0;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #ecd9b2;
`;

const DateAndView = styled.p`
  width: 176.2px;
  height: 19.5px;
  flex-grow: 0;
  margin: 10.1px 24.1px 0 0;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: left;
  color: #c9c9c9;
`;

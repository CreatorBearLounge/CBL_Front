import React from 'react';
import styled from 'styled-components';

interface assetCardType {
  image: string;
  width: string;
  height: string;
}

interface assetCardStyle {
  width: string;
  height: string;
}

const AssetThumbBox: React.FC<assetCardType> = ({ image, width, height }) => {
  return (
    <CardStyle width={width} height={height}>
      <CardImage src={image} alt="사아진" />
    </CardStyle>
  );
};

export default AssetThumbBox;

const CardStyle = styled.div<assetCardStyle>`
  border-radius: 16px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  display: block;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.img`
  object-fit: cover;
  transform: scale(1);
`;

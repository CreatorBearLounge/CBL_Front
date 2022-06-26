import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface assetCardType {
  image: string;
  width: string;
  height: string;
  id: number;
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
`;

const CardImage = styled.img<boxSizeStyle>`
  object-fit: cover;
  height: 100%;
  ${(props) => props.size}: 100%;
  transform: scale(1);
`;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface assetCardType {
  image: string;
  width: string;
  height: string;
  id: number;
  category: string;
}

interface assetCardStyle {
  width: string;
  height: string;
}

interface boxSizeStyle {
  size: string;
}

const NTFShopThumbBox: React.FC<assetCardType> = ({
  image,
  width,
  height,
  id,
  category,
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
      <CategoryBox>
        <p>{category}</p>
      </CategoryBox>
    </CardStyle>
  );
};

export default NTFShopThumbBox;

const CardStyle = styled(Link)<assetCardStyle>`
  position: relative;
  border-radius: 16px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  display: block;
  cursor: pointer;
  box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.25);
  :hover {
    transform: scale(1.1);
    transition: all 200ms ease-in;
  }
`;

const CardImage = styled.img<boxSizeStyle>`
  position: relative;
  object-fit: cover;
  height: 100%;
  ${(props) => props.size}: 100%;
  transform: scale(1);
`;

const CategoryBox = styled.div`
  position: absolute;
  display: inline;
  top: 15px;
  right: 15px;
  padding: 6px 10px 0px 10px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  p {
    font-size: 0.75rem;
    color: #000000;
    text-align: center;
  }
`;

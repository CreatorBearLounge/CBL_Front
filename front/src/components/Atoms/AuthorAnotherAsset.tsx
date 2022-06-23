import React from 'react';
import styled from 'styled-components';

interface assetCardType {
  image: string;
}

const AuthorAnotherAsset: React.FC<assetCardType> = ({ image }) => {
  return (
    <CardStyle>
      <CardImage src={image} alt="사아진" />
    </CardStyle>
  );
};

export default AuthorAnotherAsset;

const CardStyle = styled.div`
  border-radius: 16px;
  height: 100%;
  width: 294px;
  height: 294px;
  overflow: hidden;
  display: block;
`;

const CardImage = styled.img`
  object-fit: cover;
  transform: scale(1);
`;

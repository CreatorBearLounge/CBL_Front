import React from 'react';
import styled from 'styled-components';

interface FooterBannerType {
  title: string;
  content: string;
}

const NFTFooterBanner: React.FC<FooterBannerType> = ({ title, content }) => (
  <FooterBanner>
    <div>
      <FooterTitle>{title}</FooterTitle>
      <FooterContent>{content}</FooterContent>
    </div>
  </FooterBanner>
);

export default NFTFooterBanner;

const FooterBanner = styled.div`
  width: 520px;
  height: 140px;
  background: #27231f;
  border-radius: 16px;
  margin-top: 100px;
  margin-right: 20px;
  cursor: pointer;
  div {
    dispaly: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 35px;
  }
`;

const FooterTitle = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 40px;
  color: #ffffff;
`;

const FooterContent = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 180%;
  color: #ffffff;
`;

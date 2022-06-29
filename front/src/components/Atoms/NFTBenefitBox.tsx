import React from 'react';
import styled from 'styled-components';

interface benefitBoxType {
  title: string;
  content: string;
}

const NFTBenefitBox: React.FC<benefitBoxType> = ({ title, content }) => (
  <BenefitBox>
    <div>
      <p>{title}</p>
      <p> {content}</p>
    </div>
  </BenefitBox>
);

export default NFTBenefitBox;

const BenefitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 85px;
  background-color: #ecd9b2;
  border-radius: 16px;
  z-index: 1;
  margin-bottom: 25px;
  div {
    margin: 0;
  }
  p {
    text-align: center;
    letter-spacing: -0.02em;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-size: 1;
    line-height: 180%;
    &:nth-of-type(1) {
      font-weight: 600;
    }
  }
`;

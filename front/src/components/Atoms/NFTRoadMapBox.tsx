import React from 'react';
import styled from 'styled-components';

interface RoadMapBoxType {
  title: string;
  content: string;
}

const NFTRoadMapBox: React.FC<RoadMapBoxType> = ({ title, content }) => (
  <RoadMapBox>
    <div>
      <RoadMapTitle>{title}</RoadMapTitle>
      <RoadMapContent>{content}</RoadMapContent>
    </div>
  </RoadMapBox>
);

export default NFTRoadMapBox;

const RoadMapBox = styled.div`
  width: 275px;
  height: 349px;
  background: #f6f3ec;
  border-radius: 16px;
  margin-right: 30px;
  white-space: pre-line;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-left: 30px;
  }
`;

const RoadMapTitle = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 30px;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

const RoadMapContent = styled.p`
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 20px;
`;

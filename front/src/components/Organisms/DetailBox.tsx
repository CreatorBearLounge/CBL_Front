/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface DetailBoxProps {
  Author?: string;
  link?: string;
  content: React.ReactElement;
  linkName: string;
  title: string;
}
const DetailBox: React.FC<DetailBoxProps> = ({
  Author,
  link,
  content,
  linkName,
  title,
}) => {
  return (
    <Box>
      <BoxHead>
        <HeadText>{Author ? `${Author} ${title}` : `${title}`}</HeadText>
        {link && (
          <Link to={`/shop${link}`}>
            <p>{linkName}</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"
                fill="#A7A7A7"
              />
            </svg>
          </Link>
        )}
      </BoxHead>
      <div>{content}</div>
    </Box>
  );
};

export default DetailBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BoxHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
  }
  a > p {
    font-family: 'Noto Sans CJK KR';
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.32px;
    color: #a7a7a7;
    height: 24px;
    display: flex;
    align-items: center;
  }
`;

const HeadText = styled.span`
  font-family: 'Noto Sans CJK KR';
  font-size: 1.5rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.48px;
  color: #ecd9b2;
`;

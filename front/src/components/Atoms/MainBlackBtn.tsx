import React from 'react';
import styled from 'styled-components';

interface mbbType {
  width: string;
  height: string;
  text: string;
  iconSize: string;
}

interface mbbStyle {
  width: string;
  height: string;
}

const MainBlackBtn: React.FC<mbbType> = ({ width, height, text, iconSize }) => {
  return (
    <Btn type="button" width={width} height={height}>
      <p>{text}</p>{' '}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox={`0 0 ${iconSize} ${iconSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"
          fill="#fff"
        />
      </svg>
    </Btn>
  );
};

export default MainBlackBtn;

const Btn = styled.button<mbbStyle>`
  cursor: pointer;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #27231f;
  border-radius: 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-size: 0.875rem;
    line-height: 1.8;
    letter-spacing: -0.28px;
    color: #fff;
    font-weight: normal;
    margin-right: 10px;
  }
  svg {
    padding-bottom: 1px;
  }
`;

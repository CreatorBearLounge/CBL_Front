import React from 'react';
import styled from 'styled-components';

interface AssetDownloadBtnProps {
  width: number;
  height: number;
  backColor: string;
  textColor: string;
  fontSize: number;
  text: string;
  link: string;
}

interface AssetDownloadBtnStyleProps {
  width: number;
  height: number;
  backColor: string;
  textColor: string;
  fontSize: number;
}

const AssetDownloadBtn: React.FC<AssetDownloadBtnProps> = ({
  width,
  height,
  backColor,
  textColor,
  fontSize,
  text,
  link,
}) => {
  return (
    <AssetDownloadBtnStyle
      href={link}
      width={width}
      height={height}
      backColor={backColor}
      textColor={textColor}
      fontSize={fontSize}
    >
      <span className="material-icons brown">download</span>
      <p>{text}</p>
    </AssetDownloadBtnStyle>
  );
};

export default AssetDownloadBtn;

const AssetDownloadBtnStyle = styled.a<AssetDownloadBtnStyleProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 4px;
  flex-grow: 0;
  background-color: ${(props) => props.backColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    color: ${(props) => props.textColor};
    font-family: 'Noto Sans CJK KR';
    font-size: ${(props) => props.fontSize}px;
    font-weight: 500;
    height: 24px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`;

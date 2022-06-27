import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface artType {
  art: {
    ArtsId: number;
    ArtsCategoryName: string;
    Author: string;
    ArtsName: string;
    ArtsTime: string;
    ArtsViews: number;
    ArtsDetail: string;
    ArtsDetailImage: string;
    CountDownload: number;
    DownloadUrl: string;
  };
}

const ThumbnailAtom: React.FC<artType> = ({ art }) => (
  <>
    <ThumbnailBox key={art.ArtsId}>
      <Thumbnail src={art.ArtsDetailImage} />
      <ArtIntro to={`/shop/arts/${art.ArtsId}`}>
        <IntroBox>
          <ArtTitle>{art.ArtsName}</ArtTitle>
          <Artist>제작 | {art.Author}</Artist>
          <DateAndView>
            등록일 {art.ArtsTime} | 조회수 {art.ArtsViews}
          </DateAndView>
        </IntroBox>
      </ArtIntro>
    </ThumbnailBox>
  </>
);

export default ThumbnailAtom;

const ThumbnailBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  display: inline-block;
`;

const ArtIntro = styled(Link)`
  width: 230px;
  height: 230px;
  flex-grow: 0;
  margin: 0px 2px 18.5px 20.1px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 300ms ease-in;
  opacity: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Thumbnail = styled.img`
  width: 230px;
  height: 230px;
  flex-grow: 0;
  margin: 0px 2px 18.5px 20.1px;
  display: inline-block;

  &:hover ~ ${ArtIntro} {
    opacity: 1;
  }
`;

const IntroBox = styled.div`
  padding-top: 120px;
  margin-left: 25px;
`;

const ArtTitle = styled.h2`
  width: 200.3px;
  height: 35px;
  flex-grow: 0;
  font-family: NotoSansCJKKR;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #ecd9b2;
`;

const Artist = styled.p`
  width: 113.1px;
  height: 22.3px;
  flex-grow: 0;
  font-family: NotoSansCJKKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #ecd9b2;
`;

const DateAndView = styled.p`
  width: 176.2px;
  height: 19.5px;
  flex-grow: 0;
  margin: 10.1px 24.1px 0 0;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: left;
  color: #c9c9c9;
`;

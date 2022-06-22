import React from 'react';
import styled from 'styled-components';
import dummy from '../../db/data.json';

const ThumbnailAtom = () => (
  <div>
    {dummy.arts.map((art) => (
      <Thumbnail src={art.thumbnail} key={art.id} alt="thumnail" />
    ))}
  </div>
);

export default ThumbnailAtom;

const Thumbnail = styled.img`
  width: 294px;
  height: 294px;
  flex-grow: 0;
  margin: 30px 2px 18.5px 20.1px;
`;

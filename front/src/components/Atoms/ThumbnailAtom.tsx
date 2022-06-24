import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import dummy from '../../db/data.json';

const ThumbnailAtom = () => {
  const { category } = useParams();
  const categoryList = dummy.arts.filter((art) => art.category === category);

  return (
    <div>
      {categoryList.map((art) => (
        <Thumbnail src={art.thumbnail} key={art.id} alt="thumnail" />
      ))}
    </div>
  );
};

export default ThumbnailAtom;

const Thumbnail = styled.img`
  width: 294px;
  height: 294px;
  flex-grow: 0;
  margin: 30px 2px 18.5px 20.1px;
`;

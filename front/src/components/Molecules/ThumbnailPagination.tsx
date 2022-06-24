import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import dummy from '../../db/data.json';

const ThumbnailPagination = () => {
  const { category } = useParams();
  const categoryList = dummy.arts.filter((art) => art.category === category);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 16;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = categoryList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((art) => {
      return (
        <>
          <ThumbnailBox key={art.id}>
            <Thumbnail src={art.thumbnail} alt="thumnail" />
            <ArtIntro>
              <IntroBox>
                <ArtTitle>{art.title}</ArtTitle>
                <Artist>제작 | {art.artist}</Artist>
                <DateAndView>
                  등록일 {art.date} | 조회수 {art.view}
                </DateAndView>
              </IntroBox>
            </ArtIntro>
          </ThumbnailBox>
        </>
      );
    });

  const pageCount = Math.ceil(categoryList.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displayUsers}
      {categoryList.length > usersPerPage ? (
        <StyledPaginateContainer>
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBtns"
            previousClassName="previousBtns"
            nextLinkClassName="nextBttn"
            activeClassName="paginationActive"
          />
        </StyledPaginateContainer>
      ) : (
        ''
      )}
    </div>
  );
};

export default ThumbnailPagination;

const ThumbnailBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  display: inline-block;
`;

const ArtIntro = styled.div`
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
  /* 한줄에 4개씩 배열 위해 임시 사이즈 맞춤. 추후 수정 */
  /* width: 294px;
  height: 294px; */
  width: 230px;
  height: 230px;
  flex-grow: 0;
  margin: 0px 2px 18.5px 20.1px;
  display: inline-block;
  
  &:hover ~ ${ArtIntro} {
    opacity: 1;
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

const StyledPaginateContainer = styled.div`
  .paginationBtns {
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    list-style: none;
    cursor: pointer;
  }

  .paginationBtns a {
    width: 40px;
    height: 40px;
    flex-grow: 0;
    margin: 0 8px 0 0;
    padding: 8px 15px;
    border: solid 1px #cccccc;
    color: #969696;
  }

  .paginationBtns a:hover,
  .paginationActive a {
    border: solid 1px white;
    color: white;
  }
`;

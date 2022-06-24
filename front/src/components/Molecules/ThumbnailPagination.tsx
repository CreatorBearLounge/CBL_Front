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
      return <Thumbnail src={art.thumbnail} key={art.id} alt="thumnail" />;
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

const Thumbnail = styled.img`
  /* 한줄에 4개씩 배열 위해 임시 사이즈 맞춤. 추후 수정 */
  /* width: 294px;
  height: 294px; */
  width: 230px;
  height: 230px;
  flex-grow: 0;
  margin: 0px 2px 18.5px 20.1px;
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

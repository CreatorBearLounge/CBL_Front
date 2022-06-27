import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { Arts } from '../../common/dummy';
import ThumbnailAtom from '../Atoms/ThumbnailAtom';

interface TitleType {
  menuTitle: string;
}

const Pagination: React.FC<TitleType> = ({ menuTitle }) => {
  const categoryList = Arts.filter((art) => art.ArtsCategoryName === menuTitle);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 16;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = categoryList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((art) => {
      return <ThumbnailAtom key={art.ArtsId} art={art} />;
    });

  const pageCount = Math.ceil(categoryList.length / usersPerPage);

  const changePage = ({ selected }: never) => {
    setPageNumber(selected);
  };

  return (
    <>
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
    </>
  );
};

export default Pagination;

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

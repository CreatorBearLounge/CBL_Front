import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import ThumbnailAtom from '../Atoms/ThumbnailAtom';

type ArtsInterface = {
  id: number;
  title: string;
  categoryId: number;
  artistId: number;
  date: string;
  description: string;
  viewCount: number;
  downloadCount: number;
  downloadUserId: number;
  thumbnail: string;
  downloadUrl: string;
};

interface TitleType {
  arts: Array<ArtsInterface>;
}

const Pagination: React.FC<TitleType> = ({ arts }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 16;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = arts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((el) => {
      return <ThumbnailAtom key={el.id} art={el} />;
    });

  const pageCount = Math.ceil(arts.length / usersPerPage);

  const changePage = ({ selected }: never) => {
    setPageNumber(selected);
  };

  return (
    <>
      {displayUsers}
      {arts.length > usersPerPage ? (
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

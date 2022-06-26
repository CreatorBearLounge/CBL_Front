import React from 'react';
import styled from 'styled-components';
import AuthorAnotherAssets from '../Molecules/AuthorAnotherAssets';
import AuthorProfile from '../Molecules/AuthorProfile';
import DetailBox from '../Organisms/DetailBox';

interface AuthorPageType {
  author: string;
}
const AuthorProfilePage: React.FC<AuthorPageType> = ({ author }) => {
  return (
    <div>
      <DetailContents>
        <DetailBox
          Author={author}
          title="작가의 프로필"
          content={<AuthorProfile />}
          linkName="바로가기"
        />
      </DetailContents>
      <div className="line" />
      <DetailContents>
        <DetailBox
          Author={author}
          title="작가의 다른 작품"
          content={<AuthorAnotherAssets author={author} isProfile={false} />}
          linkName="바로가기"
        />
      </DetailContents>
    </div>
  );
};

export default AuthorProfilePage;

const DetailContents = styled.div`
  margin-bottom: 64px;
  &:not(:first-of-type) {
    margin-top: 46px;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';

interface AuthorProps {
  AuthorDetailState: boolean;
}

const AuthorProfile: React.FC = () => {
  const [AuthorInfo, SetAuthorInfo] = useState<boolean>(true);
  const [AuthorRecord, SetAuthorRecord] = useState<boolean>(false);
  const ChangeProfileInfo = () => {
    SetAuthorRecord(false);
    SetAuthorInfo(true);
  };
  const ChangeProfileRecord = () => {
    SetAuthorInfo(false);
    SetAuthorRecord(true);
  };
  return (
    <ProfilBox>
      <ProfileContiner>
        <ProfileLeft>
          <ImageWrapper>
            <ProfilImage
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </ImageWrapper>
          <span>GBF Studio</span>
        </ProfileLeft>
        <ProfilRight>
          <ul>
            <li>
              <ProfileMenuText
                AuthorDetailState={AuthorInfo}
                onClick={ChangeProfileInfo}
              >
                작가 소개
              </ProfileMenuText>
            </li>
            <li>
              <ProfileMenuText
                AuthorDetailState={AuthorRecord}
                onClick={ChangeProfileRecord}
              >
                작가 이력
              </ProfileMenuText>
            </li>
          </ul>
          <Line />
          <AuthorDetail>
            <span>{AuthorInfo ? '소개' : '이력'}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              elementum montes, <br />
              phasellus. Rutrum massa pharetra nunc suspendisse augue. <br />
              Nam feugiat in tempus, ut accumsan non. <br />
              At donec eget aenean dui volutpat sed varius elementum. <br />
              Nam feugiat in tempus, ut accumsan non. At donec eget aenean
              elementum.
            </p>
          </AuthorDetail>
        </ProfilRight>
      </ProfileContiner>
    </ProfilBox>
  );
};

export default AuthorProfile;

const ProfilBox = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 16px;
  background-color: rgba(246, 243, 236, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  overflow: hidden;
`;

const ProfilImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProfileContiner = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 68px;
  margin-left: 91px;
  span {
    margin-top: 26px;
    font-family: 'Noto Sans CJK KR';
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: -0.4px;
    color: #27231f;
  }
`;

const ProfilRight = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: row;
    li {
      margin-right: 40px;
    }
  }
`;

const ProfileMenuText = styled.p<AuthorProps>`
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  font-weight: bold;
  font-weight: ${(props) => (props.AuthorDetailState ? `bold` : `500`)};
  line-height: normal;
  letter-spacing: -0.32px;
  color: #796958;
  cursor: pointer;
`;

const Line = styled.span`
  height: 1px;
  background-color: #796958;
  margin: 11px 0 20px 0;
`;

const AuthorDetail = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: 'Noto Sans CJK KR';
    font-size: 14px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #796958;
    margin-bottom: 12px;
  }
  p {
    width: 652px;
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: normal;
    color: #796958;
  }
`;

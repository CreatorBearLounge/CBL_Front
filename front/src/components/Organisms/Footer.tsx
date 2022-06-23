import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterHead>
        <FooterHeadUl>
          <li>
            <p>이용약관 |</p>
          </li>
          <li>
            <p>개인정보처리방침 |</p>
          </li>
          <li>
            <p>청소년보호정책 |</p>
          </li>
          <li>
            <p>운영 정책</p>
          </li>
        </FooterHeadUl>
      </FooterHead>
      <FooterFooter>
        <FooterTextBox>
          <p>창작물 사용 범위 안내</p>
          <p>
            CBL의 저작물은 각 창작자에게 저작권이 있으며 저희가 제공하는 것은
            사용권입니다. <br />
            CBL의 저작물은 여러분이 제작한 서버나 영상, 행사, 게임 등에 상업적
            용도로 자유롭게 활용할 수 있습니다. <br />
            CBL에서 제작한 저작물을 허가없이 2차 배포하거나 판매할 시 처벌 될 수
            있습니다. <br />
            2차 사용에서 애매한 상황이라면 디스코드를 통해 문의바랍니다. <br />
            혹시 모를 저작권 이슈 방지를 위해 작품 크레딧에 창작자의 이름을
            적어주시거나 CBL의 저작물을 활용한 작품을 디스코드를 통해 알려주시는
            것을 권장드립니다.
          </p>
        </FooterTextBox>
        <FooterRight>
          <FooterRightIcons>
            <img
              src="https://s3-alpha-sig.figma.com/img/9d44/2fc4/8b818e1dd45467d27c677f40ba71f568?Expires=1656892800&Signature=b93MAHo3goyMucvFledsDktJ3BpIYNsbBhJKanSFV3KGt3afq9ayf01rB-PGqzY4cigURLBK6VZBraLfwd0SFWqLaHjZoWYH1yhmqqvrwlQUpl20QzxSEX~11Q86hd~Yxy6Mqb0s5HKM6~uhJ437Q~PD3OXlWqtysSoqPyfc7Kx55gFItHdIMIo2Ki2~Eqb-OxZ6XiOyx771Gw8MzhKtTqBWuGtJC1ABqxqWYSvuefnUsgaoQpL5AQwPdzO9EjXF0B9L9OhL-8E2J84tbRKGORqcaDOitrAggXc~maGwSPiSBCQAezW2oVSNL1bhbolCLcrjgJyYYfQMBd6y2tglsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="discord"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/c173/fa41/eb390c5ee7faf99ede4c4209fc865758?Expires=1656892800&Signature=Kaj3VqiSkIRtn-iAI2Y4RMdwE~leMomapx~zdrz3Lk6rIvgYxbWtckcL6xshWiwyL-2M~T4eVvlUG4tqq7TLmu4qL3NGGa8JYgmMlFjTpaKv70PRpSc1FzyVao~cUs1jwePBfwpiiNr0ZinkuFrVxdPaIaVXufA2Uae~bM-8AvIQm2GrrAosKANqyk2yqki1eV4KPRyK510hKff6KmTGsFuD7gINCc091dOc-9bnMPlEuWaxmh0gnULaI14idkfgjorVGMxOzTc1NOmSGwhLo2iRJAHjuAPvcPo1d8g2I8vTtahp4w7QEd7Gr6SjCVfvMhSOXmZ6CsOeSlVUom05sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="twitter"
            />
          </FooterRightIcons>
          <FooterRightFooter>
            <p>CREATOR BEAR LOUNGE</p>
            <span>ⓒ CREATOR BEAR LOUNGE. ALL RIGHTS RESERVED</span>
          </FooterRightFooter>
        </FooterRight>
      </FooterFooter>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 289px;
  background-color: #fafafa;
`;

const FooterHead = styled.div`
  height: 48px;
  width: 100%;
  background-color: #f6f3ec;
  display: flex;
  align-items: center;
`;

const FooterHeadUl = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 143px;
  li {
    margin-right: 10px;
    cursor: pointer;
    p {
      font-family: 'Noto Sans CJK KR';
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 180%;
      letter-spacing: -0.02px;
      color: #796958;
    }
  }
`;

const FooterFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
  margin-left: 143px;
  margin-right: 143px;
`;

const FooterTextBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans CJK KR';

  color: #969696;
  line-height: 22px;
  letter-spacing: -0.02em;
  p:first-of-type {
    font-weight: 500;
    font-size: 0.875rem;
  }
  p {
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-between;
`;

const FooterRightFooter = styled.div`
  font-family: 'Noto Sans CJK KR';
  p {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 30px;
    color: #27231f;
  }
  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 18px;
    color: #969696;
  }
`;

const FooterRightIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 19px;
  img {
    height: 24px;
    width: 24px;
    margin-left: 14px;
    filter: brightness(0);
  }
`;

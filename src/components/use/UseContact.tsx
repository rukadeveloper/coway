import styled from "styled-components";

const US = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 460px) {
      font-size: 20px;
    }
  }
  video {
    display: block;
    margin-bottom: 30px;
  }
  > p {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
    width: 100%;
    &:nth-of-type(1) {
      padding: 6px;
      background-color: #000;
      color: #fff;
      border-radius: 6px;
      font-size: 18px;
    }
    &:nth-of-type(3) {
      span {
        font-size: 30px;
        display: block;
      }
    }
    &:nth-of-type(3) {
      line-height: 1.8;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      @media screen and (max-width: 400px) {
        font-size: 14px;
      }
    }
  }
  > img[alt="family"] {
    margin-bottom: 150px;
    max-width: 130%;
  }
  > img[alt="mark"] {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    @media screen and (max-width: 560px) {
      position: relative;
      margin-bottom: 30px;
    }
  }
`;

const UseContact = () => {
  return (
    <US>
      {/* <h2>
        최신 인기 렌탈 가전 <br /> 합리적으로 이용하세요!
      </h2> */}
      <img src="/mark.png" alt="mark" />
      <h2>코웨이 갤러리 매장</h2>
      <video autoPlay muted loop playsInline>
        <source src="/44seconds.mp4" type="video/mp4" />
      </video>
      <p>홈케어 닥터겸 상담 매니저 준디</p>
      <p>직통 010-5790-0593</p>
      <p>
        약속은 생명이다 라는
        <br /> 생활의 좌우명을 가지고 <br />
        친절 상담 방문하고 있습니다.<span>😄</span>
      </p>
      <img src="/family.png" alt="family" />
    </US>
  );
};

export default UseContact;

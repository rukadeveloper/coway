import styled from "styled-components";
import UseBox from "./UseBox";

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
    &:nth-of-type(1) {
      padding: 6px;
      background-color: #000;
      color: #fff;
      border-radius: 6px;
    }
    &:nth-of-type(2) {
      span {
        font-size: 24px;
      }
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      @media screen and (max-width: 400px) {
        font-size: 17px;
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
    width: 100px;
    @media screen and (max-width: 560px) {
      position: relative;
      margin-bottom: 30px;
    }
  }
`;

const UseContact = () => {
  const boxData = [
    {
      number: 1,
      title: "CowayLife 499",
      content: "부담없는 요금으로 가볍게 렌탈",
      buContent: "일반 상조|렌탈지원금 80만원",
    },
    {
      number: 2,
      title: "CowayLife 599",
      content: "더 강력해진 렌탈 혜택 찬스",
      buContent: "프리미엄 상조 + 렌탈지원금 100만원",
    },
  ];

  return (
    <US>
      <h2>
        최신 인기 렌탈 가전 <br /> 합리적으로 이용하세요!
      </h2>
      <img src="/mark2.png" alt="mark" />
      <video autoPlay muted loop playsInline>
        <source src="/44seconds.mp4" type="video/mp4" />
      </video>
      {boxData.map(
        (d: {
          number: number;
          title: string;
          content: string;
          buContent: string;
        }) => (
          <UseBox data={d} key={d.number} />
        )
      )}
      <p>홈케어 닥터겸 담당매니저 준디</p>
      <p>직통 010-5790-0593</p>
      <p>
        약속은 생명이다 라는 생활의 좌우명을 가지고 <br />
        친절 상담 방문하고 있습니다.<span>😄</span>
      </p>
      <img src="/family.png" alt="family" />
    </US>
  );
};

export default UseContact;

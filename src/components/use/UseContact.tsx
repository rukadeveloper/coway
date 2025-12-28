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
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 700;
    width: 100%;
    &:nth-of-type(1) {
      padding: 6px;
      background-color: #000;
      color: #fff;
      border-radius: 6px;
      font-size: 15px;
    }
    &:nth-of-type(3) {
      span {
        font-size: 24px;
        display: block;
      }
    }
    &:nth-of-type(3) {
      line-height: 1.8;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      @media screen and (max-width: 400px) {
        font-size: 13px;
      }
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
      &:nth-of-type(1) {
        font-size: 13px;
      }
      &:nth-of-type(3) {
        span {
          font-size: 20px;
        }
      }
    }
  }
  > img[alt="family"] {
    margin-bottom: 30px;
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
  .discount-badge {
    position: absolute;
    top: 0;
    right: 120px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
    border-radius: 50%;
    color: #fff;
    line-height: 1.4;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    @media screen and (max-width: 560px) {
      position: relative;
      right: auto;
      margin-bottom: 30px;
      width: 130px;
      height: 130px;
      font-size: 16px;
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
      <div className="discount-badge">
        12개월
        <br />
        반값할인
      </div>
      <p>코웨이 생활가전 제품</p>
      <p>렌탈료 최대 12개월 반값할인 행사중!</p>
      <p>
        정수기 공기청정기, 의류 스타일러, 제습기 <br />
        비데, 연수기, 인덕션, 스파, 에어컨, 안마의자 <br />
        똑똑한 소비자가 되자! <br /> 상담 방문 시 친절상담 해 드립니다!
        <span>😄</span>
      </p>
      <img src="/family.jpeg" alt="family" style={{ marginBottom: "200px" }} />
    </US>
  );
};

export default UseContact;

import styled from "styled-components";

const AC = styled.div`
  width: 100%;
  padding: 0 calc(11.55% / 2);
  margin-top: 40px;

  h3 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
    font-family: "PyeojinGothic", sans-serif !important;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  .card {
    background-color: #f3f4f6;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .card-image {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    .card-name {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
      color: #000;
      font-family: "PyeojinGothic", sans-serif !important;
      line-height: 1.4;
      min-height: 40px;
      display: flex;
      align-items: center;
    }

    .card-benefit {
      font-size: 12px;
      color: #666;
      line-height: 1.5;
      font-family: "PyeojinGothic", sans-serif !important;
    }

    .card-highlight {
      color: #14aafe;
      font-weight: 600;
      margin-top: 8px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;

    h3 {
      font-size: 16px;
    }

    .cards-grid {
      gap: 15px;
    }

    .card {
      padding: 16px;

      .card-name {
        font-size: 13px;
        min-height: 36px;
      }

      .card-benefit {
        font-size: 11px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }

    h3 {
      font-size: 14px;
    }
  }

  .bottom-banner {
    width: calc(100% + (11.55% / 2) * 2);
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 12px 20px;
    font-size: 20px;
    font-weight: 600;
    font-family: "PyeojinGothic", sans-serif !important;
    margin-left: calc(-11.55% / 2);
    margin-right: calc(-11.55% / 2);
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const AllianceCard = () => {
  const cards = [
    {
      name: "코웨이 신한카드",
      benefit: "최대 월 3만원 할인",
      highlight: "렌탈요금 청구할인",
      image: "/shinhan.png",
    },
    {
      name: "현대카드 M Edition3",
      benefit: "렌탈요금 할인 + 생활요금 할인",
      highlight: "전월실적 포함",
      image: "/hyundai.png",
    },
    {
      name: "코웨이 X LOCA",
      benefit: "최대 2만원 청구할인",
      highlight: "적립 혜택 동시 제공",
      image: "/lotte.png",
    },
    {
      name: "코웨이 삼성카드",
      benefit: "렌탈료 할인 + 생활요금 할인",
      highlight: "전월실적 포함",
      image: "/samsung.png",
    },
    {
      name: "코웨이 우리카드Ⅱ",
      benefit: "최대 2만원 청구할인",
      highlight: "렌탈요금 할인",
      image: "/kukmin.png",
    },
    {
      name: "코웨이 NH 올원카드",
      benefit: "최대 3만원 할인",
      highlight: "쓸수록 혜택 증가",
      image: "/nh.png",
    },
  ];

  return (
    <AC>
      <h3>코웨이 제휴카드</h3>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="card-name">{card.name}</div>
            <div className="card-benefit">{card.benefit}</div>
            <div className="card-highlight">{card.highlight}</div>
          </div>
        ))}
      </div>
      <div className="bottom-banner">렌탈기간 홈케어 서비스까지!!</div>
    </AC>
  );
};

export default AllianceCard;

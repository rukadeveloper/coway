import styled from "styled-components";

const BLC = styled.div`
  width: 100%;
  padding: 0 calc(11.55% / 2);
  margin-top: 40px;
  margin-bottom: 40px;

  h3 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
    font-family: "PyeojinGothic", sans-serif !important;
  }

  .bed-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  .bed-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .bed-image {
      width: 100%;
      height: 180px;
      background-color: #f3f4f6;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 10px;

      img {
        width: auto;
        height: auto;
        max-width: 90%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    .bed-info {
      padding: 16px;

      .bed-name {
        font-size: 14px;
        font-weight: 700;
        color: #000;
        margin-bottom: 10px;
        font-family: "PyeojinGothic", sans-serif !important;
        line-height: 1.4;
        min-height: 40px;
        display: flex;
        align-items: center;
      }

      .bed-price {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
        font-family: "PyeojinGothic", sans-serif !important;

        .price-label {
          font-weight: 600;
          display: inline-block;
          width: 40px;
        }
      }

      .bed-rental {
        font-size: 12px;
        color: #14aafe;
        font-weight: 600;
        font-family: "PyeojinGothic", sans-serif !important;
        margin-bottom: 8px;
      }

      .bed-card-price {
        font-size: 12px;
        color: #ff6b6b;
        font-weight: 600;
        font-family: "PyeojinGothic", sans-serif !important;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;

    h3 {
      font-size: 16px;
    }

    .bed-grid {
      gap: 15px;
    }

    .bed-card {
      .bed-image {
        height: 150px;
        padding: 10px;
      }

      .bed-info {
        padding: 12px;

        .bed-name {
          font-size: 13px;
          min-height: 36px;
        }

        .bed-price {
          font-size: 11px;
        }

        .bed-rental {
          font-size: 11px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .bed-grid {
      grid-template-columns: 1fr;
    }

    h3 {
      font-size: 14px;
    }
  }

  .bottom-message {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-top: 30px;
    font-family: "PyeojinGothic", sans-serif !important;
    line-height: 1.6;

    .store-name {
      font-weight: 700;
      color: #000;
    }

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

  .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    video {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
`;

const BedList = () => {
  const beds = [
    {
      name: "BEREX 모디&모던 침대",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_7273_attimg_org.png",
      buyPrice: "2,139,300원",
      rentalPrice: "월 23,220원~",
      cardPrice: "월 0원~",
    },
    {
      name: "BEREX 스마트&그레이스 침대",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_7266_attimg_org.png",
      buyPrice: "5,625,000원",
      rentalPrice: "월 72,720원~",
      cardPrice: "월 42,720원~",
    },
    {
      name: "BEREX 루나 프레임",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_6880_attimg_org.png?v=291040",
      buyPrice: "1,600,000원",
      rentalPrice: "월 17,900원~",
      cardPrice: "월 0원~",
    },
    {
      name: "BEREX 루네어 매트리스",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_6878_attimg_org.png?v=281125",
      buyPrice: "1,710,000원",
      rentalPrice: "월 14,900원~",
      cardPrice: "월 0원~",
    },
    {
      name: "BEREX 더블 사이드 매트리스",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_5017_attimg_org.png",
      buyPrice: "1,617,000원",
      rentalPrice: "월 15,900원~",
      cardPrice: "월 0원~",
    },
    {
      name: "BEREX 우디 프레임",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_4819_attimg_org.png",
      buyPrice: "1,485,000원",
      rentalPrice: "월 15,900원~",
      cardPrice: "월 0원~",
    },
    {
      name: "BEREX 원바디 2 매트리스",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_4182_attimg_org.png?v=311042",
      buyPrice: "1,430,000원",
      rentalPrice: "월 19,900원~",
      cardPrice: "월 0원~",
    },
    {
      name: "BEREX 컴팩트 메모리폼 매트리스",
      image:
        "https://mall.cowaystatic.com/static/upload/product/product/ID0101_584_attimg_org.png?v=301650",
      buyPrice: "1,870,000원",
      rentalPrice: "월 14,900원~",
      cardPrice: "월 0원~",
    },
  ];

  return (
    <BLC>
      <h3>추천 침대 상품</h3>
      <div className="bed-grid">
        {beds.map((bed, index) => (
          <div key={index} className="bed-card">
            <div className="bed-image">
              <img src={bed.image} alt={bed.name} />
            </div>
            <div className="bed-info">
              <div className="bed-name">{bed.name}</div>
              <div className="bed-price">
                <span className="price-label">구매</span>
                <span>{bed.buyPrice}</span>
              </div>
              <div className="bed-rental">
                <span>렌탈 {bed.rentalPrice}</span>
              </div>
              <div className="bed-card-price">
                <span>제휴카드 {bed.cardPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-message">
        <span className="store-name">코웨이 갤러리 매장</span> 침대도 정수기처럼
        깐깐하게...
      </div>
      <div className="video-container" style={{ marginTop: "30px" }}>
        <video autoPlay muted loop playsInline>
          <source src="/market_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </BLC>
  );
};

export default BedList;

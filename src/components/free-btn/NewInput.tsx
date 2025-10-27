import styled from "styled-components";
import AgreeBox from "../top-input/AgreeBox";
import EnterInput from "../top-input/EnterInput";
import type { Dispatch, SetStateAction } from "react";
import SelectDay from "../top-input/SelectDay";

const NI = styled.div`
  width: 100%;
  max-width: 600px;
  height: 650px;
  background-image: linear-gradient(to bottom, #10a7e0 0%, #095b7a 100%);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000000;
  padding: 0 20px;
  padding-top: 20px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    left: 0;
    transform: none;
    padding: 0 15px;
    padding-top: 15px;
    border-radius: 15px 15px 0 0;
  }

  span.title {
    font-size: 17px;
    color: #fff;
    display: block;
    margin-bottom: 1.4rem;
    text-align: center;
    font-weight: 500;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  .nameId {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    input {
      width: 80%;
      padding: 12px 15px;
      background-color: #fff;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      @media (max-width: 768px) {
        width: 100%;
        padding: 14px 15px;
        font-size: 16px;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(16, 167, 224, 0.3);
      }
    }
    label {
      flex: 1;
      color: #fff;
      font-weight: 600;
      font-size: 14px;

      @media (max-width: 768px) {
        margin-bottom: 8px;
        font-size: 15px;
      }
    }
  }

  .phoneId {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    label {
      flex: 1;
      color: #fff;
      font-weight: 600;
      font-size: 14px;

      @media (max-width: 768px) {
        margin-bottom: 8px;
        font-size: 15px;
      }
    }
    .phone-group {
      width: 80%;
      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: 768px) {
        width: 100%;
        gap: 4px;
        flex-wrap: nowrap;
      }

      span {
        display: flex;
        width: 10px;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;

        @media (max-width: 768px) {
          width: 8px;
        }
      }
      input {
        flex: 1;
        padding: 12px 8px;
        background-color: #fff;
        border-radius: 8px;
        border: none;
        font-size: 14px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        min-width: 0;

        @media (max-width: 768px) {
          padding: 12px 4px;
          font-size: 14px;
          min-width: 0;
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(16, 167, 224, 0.3);
        }
      }
    }
  }

  .agrees {
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }

    label {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 15px;
        gap: 12px;
      }

      input[type="checkbox"] {
        width: 24px;
        height: 24px;
        accent-color: #10a7e0;
      }
    }
  }
`;

const NewInput = ({
  nameData,
  phoneData,
  isAgreed,
  handleNameData,
  handlePhone1,
  handlePhone2,
  handlePhone3,
  handleAgree,
  selectedDigital,
  setSelectedDigital,
  day,
  setDay,
}: {
  nameData: string;
  phoneData: { phoneOne: string; phoneTwo: string; phoneThree: string };
  isAgreed: boolean;
  handleNameData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAgree: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDigital: { content: string; index: number; isOpen: boolean };
  setSelectedDigital: Dispatch<
    SetStateAction<{ content: string; index: number; isOpen: boolean }>
  >;
  day: number | null;
  setDay: Dispatch<SetStateAction<number | null>>;
}) => {
  return (
    <NI>
      <form>
        <span className="title">신용불량자는 렌탈이 제한됩니다.</span>
        <div className="nameId">
          <label htmlFor="nameId">이름</label>
          <input
            type="text"
            value={nameData}
            onChange={handleNameData}
            required
          />
        </div>
        <div className="phoneId">
          <label htmlFor="phoneId1">폰번호</label>
          <div className="phone-group">
            <input
              type="text"
              value={phoneData.phoneOne}
              onChange={handlePhone1}
              required
            />
            <span>-</span>
            <input
              type="text"
              value={phoneData.phoneTwo}
              onChange={handlePhone2}
              required
            />
            <span>-</span>
            <input
              type="text"
              value={phoneData.phoneThree}
              onChange={handlePhone3}
              required
            />
          </div>
        </div>
        <EnterInput
          label="가전제품"
          type="combo_box"
          forId="comboId"
          combo_array={[
            "정수기_32종 상담/coway",
            "업소용 정수기/coway_company",
            "얼음 정수기/coway_ice",
            "침대 매트리스/matrix",
            "공기청정기/air",
            "의류 청정기/cloth",
            "비데/vide",
            "연수기/yeonsoo",
            "인덕션/induction",
            "안마의자_베드/chair",
          ]}
          state={selectedDigital}
          setState={setSelectedDigital}
          isUp
        />
        <SelectDay day={day} setDay={setDay} />
        <div className="agrees">
          <label htmlFor="agreeId">
            <input
              type="checkbox"
              id="agreeId"
              checked={isAgreed}
              onChange={handleAgree}
              required
            />
            <span>개인 정보 처리 방침 동의</span>
          </label>
        </div>
        <AgreeBox />
      </form>
    </NI>
  );
};

export default NewInput;

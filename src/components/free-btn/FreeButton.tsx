import styled from "styled-components";
import NewInput from "./NewInput";
import { useState } from "react";
import axios from "axios";
import { dayConvert } from "../../utils/dayConvert";

const FB = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > button {
    width: 400px;
    margin: 0 auto;
    padding: 1rem 0;
    background-color: #5fc9f2;
    color: #fff;
    border-radius: 6px 6px 0 0;
    position: fixed;
    bottom: 0;
    z-index: 2000001;
    &:nth-of-type(1) {
      bottom: 56px;
    }
    &:disabled {
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.45);
        border-radius: 6px 6px 0 0;
      }
    }
  }
`;

const FreeButton = () => {
  const combo_array = [
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
  ];
  const [selectedDigital, setSelectedDigital] = useState({
    content: "coway",
    index: 0,
    isOpen: false,
  });
  const [day, setDay] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [nameData, setNameData] = useState("");
  const [phoneData, setPhoneData] = useState({
    phoneOne: "",
    phoneTwo: "",
    phoneThree: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleNameData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameData(e.target.value.trim().slice(0, 3));
  };

  const handlePhone1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneData((prev) => ({
      ...prev,
      phoneOne: e.target.value.trim().slice(0, 3),
    }));
  };

  const handlePhone2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneData((prev) => ({
      ...prev,
      phoneTwo: e.target.value.trim().slice(0, 4),
    }));
  };

  const handlePhone3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneData((prev) => ({
      ...prev,
      phoneThree: e.target.value.trim().slice(0, 4),
    }));
  };

  const handleAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  const sendSMS = async () => {
    try {
      const res = await axios.post(
        `https://sms-backend-omega.vercel.app/api/send-sms`,
        {
          to: "01082420593",
          message: `이름은 ${nameData}입니다. 번호는 ${phoneData.phoneOne}${
            phoneData.phoneTwo
          }${phoneData.phoneThree}입니다. 상품은 ${
            combo_array[selectedDigital.index].split("/")[1] ===
            selectedDigital.content
              ? combo_array[selectedDigital.index].split("/")[0]
              : ""
          }이고, 예약 희망 요일은 ${dayConvert(day!)}입니다.`,
        }
      );
      console.log(res);
      alert("문자가 전송되었습니다! 조금만 기다려주세요!");
    } catch (err: unknown) {
      console.error(err);
      alert("제출 중 오류가 발생했습니다!");
    } finally {
      setNameData("");
      setPhoneData({
        phoneOne: "",
        phoneTwo: "",
        phoneThree: "",
      });
      setSelectedDigital({
        content: "coway",
        index: 0,
        isOpen: false,
      });
      setDay(null);
    }
  };

  console.log(
    "nameData:" +
      nameData +
      "phoneData : " +
      phoneData +
      "isAgreed : " +
      isAgreed +
      "day : " +
      day
  );

  return (
    <FB>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        침대홈케어1회 서비스
      </button>
      <button
        disabled={
          !nameData ||
          !phoneData.phoneOne ||
          !phoneData.phoneTwo ||
          !phoneData.phoneThree ||
          !isAgreed ||
          day === null ||
          !selectedDigital
        }
        onClick={sendSMS}
      >
        상담신청하기
      </button>
      {isOpen && (
        <NewInput
          nameData={nameData}
          phoneData={phoneData}
          isAgreed={isAgreed}
          handleNameData={handleNameData}
          handlePhone1={handlePhone1}
          handlePhone2={handlePhone2}
          handlePhone3={handlePhone3}
          handleAgree={handleAgree}
          selectedDigital={selectedDigital}
          setSelectedDigital={setSelectedDigital}
          day={day}
          setDay={setDay}
          combo_array={combo_array}
        />
      )}
    </FB>
  );
};

export default FreeButton;

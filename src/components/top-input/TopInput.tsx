import { useState } from "react";
import styled from "styled-components";
import EnterInput from "./EnterInput";
import Agree from "./Agree";
import SelectDay from "./SelectDay";
import { dayConvert } from "../../utils/dayConvert";

const TopperInput = styled.div`
  width: 500px;
  padding: 60px;
  border-radius: 30px;
  margin-bottom: 10px;
  background-image: linear-gradient(to bottom, #10a7e0 0%, #095b7a 100%);
  form {
    > h1 {
      color: #fff;
      font-size: 19px;
      margin-bottom: 20px;
      text-align: center;
      br {
        display: none;
      }
    }
    > button {
      margin-top: 20px;
      width: 100%;
      background-color: #5fc9f2;
      padding: 0.9rem 0;
      border-radius: 10px;
    }
  }

  @media (max-width: 500px) {
    width: 360px;
    padding: 30px;
    form {
      > h1 {
        font-size: 17px;
        br {
          display: block;
        }
      }
    }
  }
`;

const TopInput = () => {
  const [selectedDigital, setSelectedDigital] = useState({
    content: "coway",
    index: 0,
    isOpen: false,
  });
  const [name, setName] = useState("");

  const [phone, setPhone] = useState({
    phone1: "",
    phone2: "",
    phone3: "",
  });

  const [agreeChecked, setAgreeChecked] = useState(false);

  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const disabled = !selectedDigital || !name || !phone || !agreeChecked;

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

  const kakaoConsult = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("https://sms-backend-omega.vercel.app/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "01082420593",
          message: `이름은 ${name}입니다. 번호는 ${phone.phone1}${
            phone.phone2
          }${phone.phone3}입니다. 상품은 ${
            combo_array[selectedDigital.index].split("/")[1] ===
            selectedDigital.content
              ? combo_array[selectedDigital.index].split("/")[0]
              : ""
          }이고, 예약 희망 요일은 ${dayConvert(selectedDay!)}입니다.`,
        }),
      });

      alert("문자가 전송되었습니다! 조금만 기다려주세요!");
    } catch (err) {
      alert("제출 중 오류가 발생했습니다.");
    } finally {
      setName("");
      setPhone({
        phone1: "",
        phone2: "",
        phone3: "",
      });
      setSelectedDigital({
        content: "coway",
        index: 0,
        isOpen: false,
      });
      setSelectedDay(null);
      setAgreeChecked(false);
    }
  };

  return (
    <TopperInput>
      <form onSubmit={kakaoConsult}>
        <h1>신용불량자는 렌탈이 제한됩니다.</h1>
        <EnterInput
          label="이름"
          type="text"
          forId="nameId"
          inputState={name}
          setInputState={setName}
        />
        <EnterInput
          label="폰번호"
          type="text"
          forId="phoneId"
          isLength
          phoneState={phone}
          setPhoneState={setPhone}
        />
        <EnterInput
          label="가전제품"
          type="combo_box"
          forId="comboId"
          combo_array={combo_array}
          state={selectedDigital}
          setState={setSelectedDigital}
        />
        <SelectDay day={selectedDay} setDay={setSelectedDay} />
        <Agree agree={agreeChecked} setAgree={setAgreeChecked} />
        <button type="submit" disabled={disabled}>
          상담 신청하기
        </button>
      </form>
    </TopperInput>
  );
};

export default TopInput;

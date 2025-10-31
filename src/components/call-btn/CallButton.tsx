import styled from "styled-components";

const CBN = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 100000000;
  a {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.09);
    @media screen and (max-width: 400px) {
      width: 60px;
      height: 60px;
      img {
        width: 35px;
      }
    }
  }
`;

const CallButton = () => {
  return (
    <CBN>
      <a href={`tel:01057900593`}>
        <img src="/call.png" alt="call" width={50} />
      </a>
    </CBN>
  );
};

export default CallButton;

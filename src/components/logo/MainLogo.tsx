import styled from "styled-components";

const ML = styled.div`
  h2 {
    text-align: center;
    color: #44a7e0;
  }
  @media (max-width: 500px) {
    img {
      width: 160px;
    }
  }
`;

const MainLogo = () => {
  return (
    <ML style={{ marginBottom: "20px" }}>
      <img src={"/coway_logo.png"} alt="logo" width={240} />
      <h2>코웨이</h2>
    </ML>
  );
};

export default MainLogo;

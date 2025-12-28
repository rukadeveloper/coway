import styled from "styled-components";

import FreeButton from "../../components/free-btn/FreeButton";
import GridComp from "../../components/grid-comp/GridComp";
import ImageBanner from "../../components/image-banner/ImageBanner";
import ImageMainSlide from "../../components/image-main-slide/ImageMainSlide";
import ImageSlide from "../../components/image-slide/ImageSlide";
import MainLogo from "../../components/logo/MainLogo";
import Matrix from "../../components/matrix/Matrix";
import TopInput from "../../components/top-input/TopInput";
import UseContact from "../../components/use/UseContact";
import VideoComp from "../../components/video-comp/VideoComp";
import ZehuCard from "../../components/zehu-card/ZehuCard";
import CallButton from "../../components/call-btn/CallButton";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  overflow-x: hidden;
  margin: 0 auto;
  background-color: #fff;
`;

const MainPage = () => {
  return (
    <MainWrapper>
      <MainLogo />
      <TopInput />
      {/* <ImageSlide /> */}
      <ZehuCard />
      {/* <ImageBanner /> */}
      {/* <ImageMainSlide /> */}
      {/* <VideoComp /> */}
      <Matrix />
      <GridComp />
      <UseContact />
      <FreeButton />
      <CallButton />
    </MainWrapper>
  );
};

export default MainPage;

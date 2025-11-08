import styled from "styled-components";

const VC = styled.div`
  width: 100%;
  padding: 30px 60px;
  img {
    margin-bottom: 30px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 30px;
  }
`;

const VideoComp = () => {
  return (
    <VC>
      <video autoPlay muted loop playsInline>
        <source src={"/video.mp4"} type="video/mp4" />
      </video>
      <img src="/care_service.jpeg" alt="care_service" />
    </VC>
  );
};

export default VideoComp;

import { useState } from "react";
import styled from "styled-components";

const VC = styled.div`
  width: 100%;
  padding: 30px 60px;
  position: relative;
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
  const [loading, setLoading] = useState(false);

  return (
    <VC>
      {loading && (
        <div
          style={{
            width: "calc(100% - 60px)",
            aspectRatio: 1.76231 / 1,
            backgroundColor: "#E8EEF2",
            position: "absolute",
            left: "30px",
            right: "30px",
            top: "30px",
            bottom: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          로딩중입니다..
        </div>
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadStart={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
      >
        <source src={"/video.mp4"} type="video/mp4" />
      </video>
    </VC>
  );
};

export default VideoComp;

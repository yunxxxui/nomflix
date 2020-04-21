import React from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 1.7;
  display: flex;
  justify-content: center;
`;

const Youtube = styled.iframe`
  position: absolute;
  width: 720px;
  height: 480px;
  margin-bottom: 48px;
`;

const Video = ({
  result: {
    videos: { results: videos },
  },
}) => (
  <Container>
    {videos && videos.length > 0 ? (
      <>
        {videos.map((video, index) => (
          <Youtube
            id={`${index}`}
            src={`https://www.youtube.com/embed/${video.key}`}
          />
        ))}
      </>
    ) : (
      "Can't find Video"
    )}
  </Container>
);

export default Video;

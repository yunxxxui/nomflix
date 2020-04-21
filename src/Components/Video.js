import React from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 1.7;
  display: flex;
  justify-content: center;
`;

const VideoContainer = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Video = ({ result }) => <Container></Container>;

export default Video;

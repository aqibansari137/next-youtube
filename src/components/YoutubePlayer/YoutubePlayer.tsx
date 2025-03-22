import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { YoutubePlayerStyle } from "./styles";

interface VideoPlayerProps {
  className?: string;
  url: string;
  playing?: boolean;
  controls?: boolean;
  volume?: number;
  muted?: boolean;
  light?: string | React.JSX.Element;
  loop?: boolean;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const YoutubePlayer: React.FC<VideoPlayerProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <YoutubePlayerStyle>
      {isMounted ? (
        <ReactPlayer
          {...props}
          config={{
            youtube: {
              playerVars: {
                controls: 1,
                rel: 0,
                showInfo: 0,
                autoplay: 1,
              },
            },
          }}
        />
      ) : null}
    </YoutubePlayerStyle>
  );
};
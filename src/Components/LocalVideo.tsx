import React, { useRef, useEffect } from 'react';

interface LocalVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const LocalVideo: React.FC<LocalVideoProps> = (props: LocalVideoProps) => {
  const { videoRef } = props;
  return <video ref={videoRef} autoPlay muted className="Round" width="320" height="80%" />;
};

export default LocalVideo;

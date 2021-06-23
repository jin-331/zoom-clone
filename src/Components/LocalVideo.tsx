import React, { useRef, useEffect } from 'react';

interface LocalVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const LocalVideo: React.FC<LocalVideoProps> = (props: LocalVideoProps) => {
  return <video ref={props.videoRef} autoPlay muted className="Round" width="320" height="100%"></video>;
};

export default LocalVideo;

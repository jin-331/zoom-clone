import React, { useEffect, useRef } from 'react';
import LocalVideo from '../Components/LocalVideo';
import { useAppDispatch, useAppSelector } from '../hooks';

const MeetingPage: React.FC = () => {
  const LocalVideoRef = useRef<HTMLVideoElement>(null);
  const localStream = useAppSelector((state) => state.videoSetter.localStream);

  useEffect(() => {
    if (LocalVideoRef.current && localStream) {
      LocalVideoRef.current.srcObject = localStream;
    }
  }, []);

  return (
    <>
      <h1>meetingPage</h1>
      <LocalVideo videoRef={LocalVideoRef} />
    </>
  );
};

export default MeetingPage;

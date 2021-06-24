import React, { useEffect, useRef } from 'react';
import LocalVideo from '../Components/LocalVideo';
import { useAppDispatch, useAppSelector } from '../hooks';

const MeetingPage: React.FC = () => {
  const LocalVideoRef = useRef<HTMLVideoElement>(null);
  const RemoteVideoRef = useRef<HTMLVideoElement>(null);
  const localStream = useAppSelector((state) => state.videoSetter.localStream);
  const remoteStream = useAppSelector((state) => state.videoSetter.remoteStream);

  useEffect(() => {
    if (LocalVideoRef.current && localStream && remoteStream && RemoteVideoRef.current) {
      LocalVideoRef.current.srcObject = localStream;
      RemoteVideoRef.current.srcObject = remoteStream;
      console.log('取得できました。');
    } else {
      console.log('取得できません');
    }
  }, [remoteStream]);

  return (
    <>
      <div className="VideoContainer">
        <div className="RightBottom">
          <LocalVideo videoRef={LocalVideoRef} />
        </div>
        <div className="VideoWrap">
          <video ref={RemoteVideoRef} autoPlay muted className="RemoteVideo" />
        </div>
      </div>
    </>
  );
};

export default MeetingPage;

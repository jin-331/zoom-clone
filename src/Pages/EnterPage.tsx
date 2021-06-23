import React, { useRef, useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LocalVideo from '../Components/LocalVideo';
import { setMyId, setLocalStream } from '../Slicers/videoSetterSlice';
import { useAppSelector, useAppDispatch } from '../hooks';

const EnterPage = () => {
  const LocalVideoRef = useRef<HTMLVideoElement>(null);
  const myId = useAppSelector((state) => state.videoSetter.myId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (LocalVideoRef.current) {
          LocalVideoRef.current.srcObject = stream;
          const s: MediaStream = stream;
          dispatch(setLocalStream(s));
          LocalVideoRef.current.play();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="EnterPage">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <LocalVideo videoRef={LocalVideoRef} />
          <p>{myId}</p>
          {/* <button>meeting に参加する</button> */}
        </Grid>
        <Grid item xs={8}>
          <h3>na</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default EnterPage;

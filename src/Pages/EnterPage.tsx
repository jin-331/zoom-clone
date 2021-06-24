import React, { useRef, useEffect } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import LocalVideo from '../Components/LocalVideo';
import { setLocalStream, setTheirId } from '../Slicers/videoSetterSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';

interface EnterPageProps {
  callTheir: () => void;
  calledTheir: (_localStream: MediaStream) => void;
}

const EnterPage: React.FC<EnterPageProps> = (props: EnterPageProps) => {
  const LocalVideoRef = useRef<HTMLVideoElement>(null);
  const myId = useAppSelector((state) => state.videoSetter.myId);
  const theirId = useAppSelector((state) => state.videoSetter.theirId);
  const localStream = useAppSelector((state) => state.videoSetter.localStream);
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
          props.calledTheir(stream);
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
          <p>MyRoomID:{myId}</p>
          <input
            onChange={(event) => {
              dispatch(setTheirId(event.target.value));
            }}
          />
          <button
            onClick={() => {
              if (localStream) {
                props.callTheir();
              }
            }}
            type="button"
          >
            Room に参加する
          </button>
        </Grid>
        <Grid item xs={8}>
          <h3>na</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default EnterPage;

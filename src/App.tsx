import React, { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';
import EnterPage from './Pages/EnterPage';
import MeetingPage from './Pages/MeetingPage';
import { Switch, Route } from 'react-router-dom';
import Peer, { MediaConnection } from 'skyway-js';
import { useAppSelector, useAppDispatch } from './hooks';
import { setMyId, setRemoteStream, setMediaConnection } from './Slicers/videoSetterSlice';
import { useHistory } from 'react-router';

const Path = {
  enter: '/',
  meeting: '/meeting',
};

let KEY = '';
if (process.env.REACT_APP_SKYWAY_KEY) {
  KEY = process.env.REACT_APP_SKYWAY_KEY;
}

function App() {
  const peer = new Peer({
    key: KEY,
    debug: 3,
  });

  const RemoteVideoRef = useRef<HTMLVideoElement>(null);
  const localStream = useAppSelector((state) => state.videoSetter.localStream);
  const dispatch = useAppDispatch();
  const mediaConnection = useAppSelector((state) => state.videoSetter.mediaConnection);
  const theirId = useAppSelector((state) => state.videoSetter.theirId);
  const history = useHistory();

  useEffect(() => {
    peer.on('open', () => {
      console.log(peer.id);
      const pi = peer.id;
      dispatch(setMyId(pi));
    });
  }, []);

  const called = (mc: MediaConnection) => {
    mc.on('stream', async (stream) => {
      await dispatch(setRemoteStream(stream));
      await history.push('/meeting');
    });
  };

  // 発信処理
  const callThier = () => {
    const _mc = peer.call(theirId, localStream);
    dispatch(setMediaConnection(_mc));
    console.log('onClick');
    called(_mc);
  };

  // 着信処理
  const calledTheir = (_localStream: MediaStream) => {
    peer.on('call', (_mediaConnection) => {
      _mediaConnection.answer(_localStream);
      called(_mediaConnection);
    });
  };

  return (
    <Switch>
      <Route
        exact
        path={Path.enter}
        render={() => <EnterPage calledTheir={calledTheir} callTheir={() => callThier()} />}
      />
      <Route exact path={Path.meeting} render={() => <MeetingPage />} />
    </Switch>
  );
}

export default App;

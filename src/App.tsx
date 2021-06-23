import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import './App.css';
import EnterPage from './Pages/EnterPage';
import MeetingPage from './Pages/MeetingPage';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Peer, {
  MediaConnection,
} from 'skyway-js';
import {
  useAppSelector,
  useAppDispatch,
} from './hooks';
import {
  setMyId,
  setLocalStream,
} from './Slicers/videoSetterSlice';

const Path =
  {
    enter:
      '/',
    meeting:
      '/meeting',
  };

function App() {
  const peer =
    new Peer(
      {
        key: '4f0d4cf8-ca05-4d1b-8828-77980e8fe7bd',
        debug: 3,
      }
    );
  const RemoteVideoRef =
    useRef<HTMLVideoElement>(
      null
    );
  const [
    theirId,
    setTheirId,
  ] =
    useState(
      ''
    );
  const [
    mediaConnection,
    setMediaConnection,
  ] =
    useState<MediaConnection>();
  const localStream =
    useAppSelector(
      (
        state
      ) =>
        state
          .videoSetter
          .localStream
    );
  const dispatch =
    useAppDispatch();

  useEffect(() => {
    peer.on(
      'open',
      () => {
        console.log(
          peer.id
        );
        const pi =
          peer.id;
        dispatch(
          setMyId(
            pi
          )
        );
      }
    );
  }, []);

  const hoge =
    '';
  const callThier =
    useCallback(() => {
      const mediaConnection =
        peer.call(
          theirId,
          localStream
        );
      setMediaConnection(
        mediaConnection
      );
    }, []);

  peer.on(
    'call',
    (
      mediaConnection
    ) => {
      console.log(
        'called'
      );
      mediaConnection.answer(
        localStream
      );
      mediaConnection.on(
        'stream',
        (
          stream
        ) => {
          if (
            RemoteVideoRef.current
          ) {
            RemoteVideoRef.current.srcObject =
              stream;
            RemoteVideoRef.current.play();
          }
        }
      );
    }
  );

  return (
    <Switch>
      <Route
        exact
        path={
          Path.enter
        }
        render={() => (
          <EnterPage />
        )}
      />
      <Route
        exact
        path={
          Path.enter
        }
        render={() => (
          <MeetingPage />
        )}
      />
    </Switch>
  );
}

export default App;

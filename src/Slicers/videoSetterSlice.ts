import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MediaConnection } from 'skyway-js';
import type { RootState } from '../store';

interface VideoSetterState {
  myId: string;
  localStream: MediaStream | undefined;
  theirId: string;
  remoteStream: MediaStream | undefined;
  mediaConnection: MediaConnection | undefined;
}

const initialState: VideoSetterState = {
  myId: '',
  localStream: undefined,
  theirId: '',
  remoteStream: undefined,
  mediaConnection: undefined,
};

export const videoSetterSlice = createSlice({
  name: 'videoSetter',
  initialState,
  reducers: {
    setMyId: (state: VideoSetterState, action: PayloadAction<string>) => {
      state.myId = action.payload;
    },
    setLocalStream: (state: VideoSetterState, action: PayloadAction<MediaStream>) => {
      state.localStream = action.payload;
    },
    setTheirId: (state: VideoSetterState, action: PayloadAction<string>) => {
      state.theirId = action.payload;
    },
    setRemoteStream: (state: VideoSetterState, action: PayloadAction<MediaStream>) => {
      state.remoteStream = action.payload;
    },
    setMediaConnection: (state: VideoSetterState, action: PayloadAction<MediaConnection>) => {
      state.mediaConnection = action.payload;
    },
  },
});

export const { setMyId, setLocalStream, setRemoteStream, setTheirId, setMediaConnection } = videoSetterSlice.actions;

export default videoSetterSlice.reducer;

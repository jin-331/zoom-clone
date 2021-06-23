import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface VideoSetterState {
  myId: string;
  localStream: MediaStream | undefined;
}

const initialState: VideoSetterState = {
  myId: 'test',
  localStream: undefined,
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
  },
});

export const { setMyId, setLocalStream } = videoSetterSlice.actions;

export default videoSetterSlice.reducer;

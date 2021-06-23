import { configureStore } from '@reduxjs/toolkit';
import videoSetterReducer from './Slicers/videoSetterSlice';

const store = configureStore({
	reducer:{
		videoSetter: videoSetterReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
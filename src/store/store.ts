// store
import { configureStore } from '@reduxjs/toolkit';
import avatarReducer from './avatarSlice';
import notificationSlice from './notificationSlice';

export const store = configureStore({
  reducer: {
    avatar: avatarReducer,
    notification:notificationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

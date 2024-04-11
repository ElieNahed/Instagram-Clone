// notificationSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationState {
  notifications: string[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayNotificationMessage(state, action: PayloadAction<string>) {
      state.notifications.push(action.payload);
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const {displayNotificationMessage, clearNotifications} =
  notificationSlice.actions;

export default notificationSlice.reducer;

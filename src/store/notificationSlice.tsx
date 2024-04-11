import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationState {
  notifications: string[];
  likeCounts: {[key: string]: number};
}

const initialState: NotificationState = {
  notifications: [],
  likeCounts: {},
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
    updateLikeCount(
      state,
      action: PayloadAction<{actorId: string; count: number}>,
    ) {
      const {actorId, count} = action.payload;
      state.likeCounts[actorId] = count;
    },
  },
});

export const {displayNotificationMessage, clearNotifications, updateLikeCount} =
  notificationSlice.actions;

export default notificationSlice.reducer;

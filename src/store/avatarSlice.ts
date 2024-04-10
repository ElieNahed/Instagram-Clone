// avatarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AvatarState {
  avatarImage: string | null;
}

const initialState: AvatarState = {
  avatarImage: null,
};

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setAvatarImage(state, action: PayloadAction<string | null>) {
      state.avatarImage = action.payload;
    },
  },
});

export const { setAvatarImage } = avatarSlice.actions;

export default avatarSlice.reducer;

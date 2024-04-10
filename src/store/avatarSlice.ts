import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AvatarState {
  avatarImage: string | null;
  loading: boolean;
  error: any;
}

export const fetchAvatarImage = createAsyncThunk(
  'avatar/fetchAvatarImage',
  async () => {
    try {
      const response = await axios.get(
        'https://66152deb2fc47b4cf27e3622.mockapi.io/user/user'
      );
      if (response.data && response.data.length > 0) {
        return response.data[0].avatar;
      } else {
        throw new Error('No avatar image found');
      }
    } catch (error) {
      throw error;
    }
  }
);

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState: {
    avatarImage: null, 
    loading: false,
    error: null,
  } as AvatarState, 
  reducers: {
    setAvatarImage: (state, action) => {
      state.avatarImage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvatarImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAvatarImage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.avatarImage = action.payload;
      })
      .addCase(fetchAvatarImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setAvatarImage } = avatarSlice.actions;

export default avatarSlice.reducer;

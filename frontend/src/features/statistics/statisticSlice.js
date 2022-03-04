import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import statisticService from './statisticService';

const initialState = {
  statisticObj: {},
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
};

//create statistic
export const update__statistic = createAsyncThunk(
  'statistic/update__statistic',
  async (statisticData, thunkAPI) => {
    try {
      return await statisticService.update__statistic(statisticData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const statistic__Slice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSucces = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(update__statistic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(update__statistic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.statisticObj = action.payload;
      })
      .addCase(update__statistic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.statisticObj = {};
      });
  },
});

export const { reset } = statistic__Slice.actions;
export default statistic__Slice.reducer;

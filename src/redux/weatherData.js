import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';
import {BASE_URL} from '../services/baseUrl';
import {currentWeatherByLocation} from '../services/getWeatherInformation';

export const getWeatherDataByLocation = createAsyncThunk(
  'weather/getWeatherDataByLocation',
  async query => {
    try {
      const response = await fetch(
        `${BASE_URL}/current.json?q=${query}`,
        currentWeatherByLocation,
      );
      const weatherData = await response.json();
      // console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.log(error);
    }
  },
);

export const weatherDataSlice = createSlice({
  name: 'currentWeather',
  initialState: {
    currentWeatherDetails: [],
    displayedWeatherDetails: null,
    isLoading: null,
    error: [],
  },
  reducers: {
    markAsFavourite: state => {
      state.displayedWeatherDetails = {
        ...state.displayedWeatherDetails,
        isFavourite: true,
      };
    },
    unMarkAsFavourite: state => {
      state.displayedWeatherDetails = {
        ...state.displayedWeatherDetails,
        isFavourite: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(getWeatherDataByLocation.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getWeatherDataByLocation.fulfilled, (state, action) => {
      state.currentWeatherDetails = action.payload;
      state.displayedWeatherDetails = {...action.payload, isFavourite: false};
      state.isLoading = false;
    });
    builder.addCase(getWeatherDataByLocation.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const {markAsFavourite, unMarkAsFavourite} = weatherDataSlice.actions;

export default weatherDataSlice.reducer;

// extraReducers: (builder) => {
//   builder.addCase(getAuthnUser.fulfilled, (state, { payload }) => {
//       state.resp = payload
//   }) /

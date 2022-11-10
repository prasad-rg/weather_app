import {createSlice} from '@reduxjs/toolkit';

const initialValue = [];

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteList: initialValue,
  },
  reducers: {
    addToFavourite: (state, action) => {
      let isPresent = false;
      for (let item of state.favouriteList) {
        if (item.id === action.payload.id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        state.favouriteList.unshift(action.payload);
      }
    },
    removeFromFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter(
        item => item.id !== action.payload,
      );
    },
    removeAllFavourite: state => {
      state.favouriteList = [];
    },
  },
});

export const {addToFavourite, removeFromFavourite, removeAllFavourite} =
  favouriteSlice.actions;
export default favouriteSlice.reducer;

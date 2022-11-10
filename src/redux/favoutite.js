import {createSlice} from '@reduxjs/toolkit';

const initialValue = [];

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteList: initialValue,
    isFavouriteItem: null,
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
    checkItemInFavouriteList: (state, action) => {
      state.isFavouriteItem = false;
      for (let item of state.favouriteList) {
        if (item.id === action.payload) {
          state.isFavouriteItem = true;
        }
      }
    },
  },
});

export const {
  addToFavourite,
  removeFromFavourite,
  removeAllFavourite,
  checkItemInFavouriteList,
} = favouriteSlice.actions;
export default favouriteSlice.reducer;

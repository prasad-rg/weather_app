import {createSlice} from '@reduxjs/toolkit';

const initialValue = [];

export const recentSearchSlice = createSlice({
  name: 'recentSearch',
  initialState: {
    recentSearchList: initialValue,
  },
  reducers: {
    addToRecentSearch: (state, action) => {
      let isPresent = false;
      for (let item of state.recentSearchList) {
        if (item.id === action.payload.id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        state.recentSearchList.unshift(action.payload);
      }
    },
    clearAllRecentSearch: state => {
      state.recentSearchList = [];
    },
    changeFavouriteStatus: (state, action) => {
      state.recentSearchList = state.recentSearchList.map(item => {
        if (item.id === action.payload) {
          return {...item, isFavourite: !item.isFavourite};
        } else {
          return item;
        }
      });
    },
  },
});

export const {addToRecentSearch, clearAllRecentSearch, changeFavouriteStatus} =
  recentSearchSlice.actions;

export default recentSearchSlice.reducer;

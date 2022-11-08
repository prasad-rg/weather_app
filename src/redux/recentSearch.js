import {createSlice} from '@reduxjs/toolkit';

const initialValue = [
  {
    id: '1',
    location: 'Udupi, Karnataka',
    temperature: '32',
    description: 'Mostly Sunny',
    isFavourite: true,
  },
  {
    id: '2',
    location: 'Kalaburagi, Karnataka',
    temperature: '36',
    description: 'Mostly Sunny',
    isFavourite: true,
  },
  {
    id: '3',
    location: 'Bidar, Karnataka',
    temperature: '30',
    description: 'Mostly Sunny',
    isFavourite: false,
  },
  {
    id: '4',
    location: 'Raichur, Karnataka',
    temperature: '28',
    description: 'Mostly Sunny',
    isFavourite: false,
  },
  {
    id: '5',
    location: 'Hubli, Karnataka',
    temperature: '26',
    description: 'Mostly Sunny',
    isFavourite: true,
  },
  {
    id: '6',
    location: 'Hyderabad, Telengana',
    temperature: '25',
    description: 'Mostly Sunny',
    isFavourite: true,
  },
];

export const recentSearchSlice = createSlice({
  name: 'recentSearch',
  initialState: {
    recentSearchList: initialValue,
  },
  reducers: {
    addToRecentSearch: (state, action) => {
      state.recentSearchList.unshift(action.payload);
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

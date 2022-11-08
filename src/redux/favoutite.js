import {createSlice} from '@reduxjs/toolkit';

const initialValue = [
  {
    id: '1',
    location: 'Udupi, Karnataka',
    temperature: '32',
    description: 'Mostly Sunny',
  },
  {
    id: '2',
    location: 'Kalaburagi, Karnataka',
    temperature: '36',
    description: 'Mostly Sunny',
  },
  {
    id: '3',
    location: 'Bidar, Karnataka',
    temperature: '30',
    description: 'Mostly Sunny',
  },
  {
    id: '4',
    location: 'Raichur, Karnataka',
    temperature: '28',
    description: 'Mostly Sunny',
  },
  {
    id: '5',
    location: 'Hubli, Karnataka',
    temperature: '26',
    description: 'Mostly Sunny',
  },
  {
    id: '6',
    location: 'Hyderabad, Telengana',
    temperature: '25',
    description: 'Mostly Sunny',
  },
];

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteList: initialValue,
  },
  reducers: {
    addToFavourite: (state, action) => {
      state.favouriteList.unshift(action.payload);
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

export const {addToFavourite, removeFromFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
  //   whitelist: ['value'],
};

export const { setFilter } = filterSlice.actions;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

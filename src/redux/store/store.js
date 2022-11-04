import {configureStore} from '@reduxjs/toolkit';
import tabReducer from '../reducer/reducer';

export const store = configureStore({
  reducer: {
    tabReducer,
  }
})

export default store;
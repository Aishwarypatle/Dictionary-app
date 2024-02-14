import { configureStore } from '@reduxjs/toolkit';
import meaningSlice from './Redux/slice'; // import your combined reducers

const store = configureStore({
  reducer: meaningSlice,

});

export default store;
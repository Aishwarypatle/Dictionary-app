import { configureStore } from '@reduxjs/toolkit';
import meaningSlice from './Redux/slice'; // import your combined reducers

var store = configureStore({
  reducer: {
    meaning : meaningSlice
  },

});

export default store;
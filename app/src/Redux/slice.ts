import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MeaningState {
  meaning: any;
}

const initialState: MeaningState = {
  meaning: ''
};

const meaningSlice = createSlice({
  name: 'meaning',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<any>) => {
        console.log(" line 16 " , action );
        state.meaning = action.payload;
    }
  }
});

export const { updateData } = meaningSlice.actions;
export default meaningSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MeaningState {
  meaning: any;
  phonetics : any
  partofspeech : any
}

const initialState: MeaningState = {
  meaning: '' ,
  phonetics : "",
  partofspeech : ""
};

const meaningSlice = createSlice({
  name: 'meaning',
  initialState,
  reducers: {
    updateMeaning: (state, action: PayloadAction<any>) => {
        state.meaning = action.payload;
        // console.log(" line 16 " , state.meaning );
    },
    updatePhonetics: (state, action: PayloadAction<any>) => {
        state.phonetics = action.payload;
        // console.log(" line 16 " , state.phonetics );
    },
    updateSpeech: (state, action: PayloadAction<any>) => {
        state.partofspeech = action.payload;
        // console.log(" line 16 " , state.meaning );
    }
  }
});

export const { updateSpeech, updatePhonetics , updateMeaning } = meaningSlice.actions;
export default meaningSlice.reducer;

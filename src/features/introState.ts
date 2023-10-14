import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IntroState {
  imageURL: string;
  description: string;
};

const initialState: IntroState = {
  imageURL: 'https://mario.wiki.gallery/images/thumb/2/27/SuperMarioParty_Waluigi.png/800px-SuperMarioParty_Waluigi.png',
  description: 'default description'
};

export const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    changeURL: (state, action: PayloadAction<string>) => {
      state.imageURL = action.payload;
    },
    changeDesc: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    }
  }
});

export const { changeURL, changeDesc } = introSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value

export default introSlice.reducer;
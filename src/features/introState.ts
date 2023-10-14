import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface IntroState {
  imageURL: string;
  description: string;
};

const initialState: IntroState = {
  // https://media.licdn.com/dms/image/C5603AQFiR8py9hDb2w/profile-displayphoto-shrink_800_800/0/1630359799353?e=1702512000&v=beta&t=FavDYmXMsFUthMFXSB2w8TnQUjumERjOkz-8jAxu7Qc
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

export const selectIntroImage = (state: RootState) => state.intro.imageURL;
export const selectIntroDescription = (state: RootState) => state.intro.description;

export default introSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface IntroState {
  imageURL: string;
  description: string;
};

const initialState: IntroState = {
  imageURL: 'https://media.licdn.com/dms/image/C5603AQFiR8py9hDb2w/profile-displayphoto-shrink_800_800/0/1630359799353?e=1702512000&v=beta&t=FavDYmXMsFUthMFXSB2w8TnQUjumERjOkz-8jAxu7Qc',
  description: "Waluigi is Luigi's lanky rival and Wario's partner. Waluigi made his debut in Mario Tennis, and since then, he has made playable appearances exclusively in the Super Mario franchise's spin-off titles. He makes an appearance as a playable character in all but one game in the Mario Tennis series."
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
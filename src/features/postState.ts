import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface PostState {
  imageURL: string,
  description: string
}

export interface PostsState {
  nextID: number,
  posts: {
    [id: number]: PostState
  }
}

const initialState: PostsState = {
  nextID: 0,
  posts: {}
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    newPost: (state, action: PayloadAction<PostState>) => {
      state.posts[state.nextID] = action.payload;
      state.nextID += 1;
    },
    editPost: (state, action: PayloadAction<{id: number, content: PostState}>) => {
      state.posts[action.payload.id] = action.payload.content;
    }
  }
});

export const { newPost, editPost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
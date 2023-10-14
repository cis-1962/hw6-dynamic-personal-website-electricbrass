import { configureStore } from '@reduxjs/toolkit'
import introReducer from '../features/introState'
import postsReducer from '../features/postState'

export const store = configureStore({
  reducer: {
    intro: introReducer,
    posts: postsReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
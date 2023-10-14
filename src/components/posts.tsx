import { useState } from "react";
import Post from "./post";
import EditPost from "./editPost";
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { selectPosts, newPost, editPost } from "../features/postState";

// have edit mode represented by int instead of bool, have -1 for not edit, otherwise its a post id
// component for editing a post takes in the post id to know which one to edit
// display it as a floating window
// do not render if edit mode -1
// load state in posts and pass as props to post
// edit buttons on posts have callback passed as prop that opens edit mode

export default function Posts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const [editMode, setEditMode] = useState(-1);
  const editCB = (id: number) => {
    setEditMode(id);
  };
  return (
    <>
      <h1 className='text-white' >Blog Posts</h1>
      <input type='button' value='New Post' className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2'
      onClick={() => dispatch(newPost({imageURL: 'https://mario.wiki.gallery/images/8/89/MPS_Toad_Artwork.png', description: 'this is a new post'}))}/>
      {editMode >= 0 &&
      <EditPost id={editMode} originalContent={posts[editMode]}
                close={() => setEditMode(-1)}/>}
      <ul>
        {/* mdn says Iterators also have a map method but it wouldnt work here unless I used array.from? */}
        {Object.entries(posts).map(([id, content]) => (
          <li key={id}>
            <Post id={parseInt(id, 10)} imageURL={content.imageURL} description={content.description} editCB={editCB} />
          </li>
        ))}
      </ul>
    </>
  );
}
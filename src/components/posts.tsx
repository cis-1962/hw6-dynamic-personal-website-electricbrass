import { useState } from "react";
import Post from "./post";
import EditPost from "./editPost";
import { useAppSelector } from '../app/hooks'
import { selectPosts } from "../features/postState";

// have edit mode represented by int instead of bool, have -1 for not edit, otherwise its a post id
// component for editing a post takes in the post id to know which one to edit
// display it as a floating window
// do not render if edit mode -1
// load state in posts and pass as props to post
// edit buttons on posts have callback passed as prop that opens edit mode

export default function Posts() {
  const posts = useAppSelector(selectPosts);
  const [editMode, setEditMode] = useState(-2);
  const editCB = (id: number) => {
    setEditMode(id);
  };
  return (
    <>
      <h1 className='text-white' >Blog Posts</h1>
      <input type='button' value='New Post' className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2'
      onClick={() => setEditMode(-1)}/>
      {editMode >= 0 &&
      <EditPost id={editMode} originalContent={posts[editMode]}
                close={() => setEditMode(-2)} />}
      {editMode === -1 &&
      <EditPost id={-1} originalContent={{title: '', imageURL: '', description: ''}}
                close={() => setEditMode(-2)} />}
      <ul>
        {Object.entries(posts).map(([id, content]) => (
          <li key={id}>
            <Post id={parseInt(id, 10)} content={content} editCB={editCB} />
          </li>
        ))}
      </ul>
    </>
  );
}
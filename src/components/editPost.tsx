import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { newPost, editPost } from "../features/postState";
import type { PostState } from "../features/postState";

export default function EditPost({ id, originalContent, close }: { id:number, originalContent: PostState, close: () => void }) {
	const [title, setTitle] = useState(originalContent.title)
	const [imageURL, setImageURL] = useState(originalContent.imageURL);
  const [description, setDescription] = useState(originalContent.description);
  const dispatch = useAppDispatch();
  return (
    <div>
			<div className='text-white'>Title</div>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <div className='text-white'>Image URL</div>
      <input type='text' className='w-64' value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
      <div className='text-white'>Description</div>
      <textarea className='resize-none h-36 w-64' value={description} onChange={(e) => setDescription(e.target.value)}/>
			<div className='mt-4'>
      	<input type='button' value='Cancel' onClick={close} className='text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-md px-4 py-2'/>
      	<input type='button' value='Save Changes' className='text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-md px-4 py-2'
				onClick={id >= 0 ?
				() => {
					dispatch(editPost({id, content: {title, imageURL, description}}))
					close()
				} :
				() => {
					dispatch(newPost({title, imageURL, description}))
					close()
				}}/>
			</div>
    </div>
  );
}
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { editPost } from "../features/postState";
import type { PostState } from "../features/postState";

export default function EditPost({ id, originalContent, close }: { id:number, originalContent: PostState, close: () => void }) {
	const [imageURL, setImageURL] = useState(originalContent.imageURL);
  const [description, setDescription] = useState(originalContent.description);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className='text-white'>Image URL</div>
      <input type='text' value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
      <div className='text-white'>Description</div>
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <input type='button' value='Cancel' onClick={close} className='text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-md px-4 py-2'/>
      <input type='button' value='Save Changes' onClick={() => {
				dispatch(editPost({id, content: {imageURL, description}}))
				close()
			}} className='text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-md px-4 py-2'/>
    </>
  );
}
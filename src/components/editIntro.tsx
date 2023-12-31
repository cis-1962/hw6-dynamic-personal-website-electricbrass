
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { changeURL, changeDesc, selectIntroImage, selectIntroDescription } from '../features/introState';

export default function EditIntro({ close }: { close: () => void }) {
  const [imageURL, setImageURL] = useState(useAppSelector(selectIntroImage));
  const [description, setDescription] = useState(useAppSelector(selectIntroDescription));
  const dispatch = useAppDispatch();
  return (
    <>
      <div className='text-white'>Image URL</div>
      <input type='text' className='w-1/4' value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
      <div className='text-white'>Description</div>
      <textarea className='h-48 w-2/6 resize-none p-2' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <div className='mt-4'>
        <input type='button' value='Cancel' onClick={close} className='text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-md px-4 py-2'/>
        <input type='button' value='Save Changes' onClick={() => {
          dispatch(changeURL(imageURL));
          dispatch(changeDesc(description));
          close();
        }} className='text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-md px-4 py-2'/>
      </div>
    </>
  );
}
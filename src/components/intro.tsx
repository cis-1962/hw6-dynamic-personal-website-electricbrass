import { useState } from "react";
import { useAppSelector } from '../app/hooks'
import EditIntro from "./editIntro";

export default function Introduction()  {
  const imageURL = useAppSelector((state) => state.intro.imageURL);
  const description = useAppSelector((state) => state.intro.description);
  const [editing, setEditing] = useState(false);
  return (
    <div className='h-fit m-4 relative'>
      <h1 className='text-white text-4xl'>About Me:</h1>
      {editing ? <EditIntro close={() => setEditing(false)}/> : 
      <>
        <img src={imageURL} alt='' className='bg-white h-96 w-auto m-6 shadow-xl rounded-xl'/>
        <div className='text-white text-xl absolute w-1/3 left-1/2 top-1/3'>{description}</div>
        <input type='button' value='Edit' onClick={() => setEditing(true)} 
        className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2 absolute right-20 top-4'/>
      </>}
    </div>
  );
}
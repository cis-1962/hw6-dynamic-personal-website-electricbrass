import { useState } from "react";
import { useAppSelector } from '../app/hooks'
import EditIntro from "./editIntro";

export default function Introduction()  {
  const imageURL = useAppSelector((state) => state.intro.imageURL);
  const description = useAppSelector((state) => state.intro.description);
  const [editing, setEditing] = useState(false);
  return (
    <>
      <h1 className='text-white'>About Me:</h1>
      {editing ? <EditIntro close={() => setEditing(false)}/> : 
      <>
        <img src={imageURL} alt='' width='200' height='auto' className='bg-white'/>
        <div className='text-white'>{description}</div>
        <input type='button' value='Edit' onClick={() => setEditing(true)} className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2'/>
      </>}
    </>
  );
}
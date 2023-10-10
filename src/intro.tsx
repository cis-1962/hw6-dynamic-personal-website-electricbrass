import { useState } from "react";

export default function Introduction()  {
  const [imageURL, setImageURL] = useState('https://mario.wiki.gallery/images/thumb/2/27/SuperMarioParty_Waluigi.png/800px-SuperMarioParty_Waluigi.png');
  const [description, setDescription] = useState('default description');
  return (
    <>
      <h1 className='text-white'>About Me:</h1>
      <img src={imageURL} alt='' width='200' height='auto' className='bg-white'/>
      <div className='text-white'>{description}</div>
      <input type='button' value='Edit' className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'/>
    </>
  );
}
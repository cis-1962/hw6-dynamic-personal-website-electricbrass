export default function Post({ id, imageURL, description, editCB }: 
  { id: number, imageURL: string, description: string, editCB: (number) => void }) {
  return (
    <>
      <h2 className='text-white'>Post #{id}</h2>
      <img src={imageURL} alt='' width='200' height='auto' className='bg-white'/>
      <div className='text-white'>{description}</div>
      <input type='button' value='Edit' onClick={() => editCB(id)} className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2'/>
    </>
  );
}
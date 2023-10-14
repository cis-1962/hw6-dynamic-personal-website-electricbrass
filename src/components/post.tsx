import { PostState } from "../features/postState";

export default function Post({ id, content, editCB }: 
  { id: number, content: PostState, editCB: (number) => void }) {
  return (
    <>
      <h2 className='text-white'>Post #{id}: {content.title}</h2>
      <img src={content.imageURL} alt='' width='200' height='auto' className='bg-white'/>
      <div className='text-white'>{content.description}</div>
      <input type='button' value='Edit' onClick={() => editCB(id)} className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2'/>
    </>
  );
}
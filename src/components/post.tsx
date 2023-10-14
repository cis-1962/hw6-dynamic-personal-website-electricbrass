import { useAppDispatch } from "../app/hooks";
import { PostState, deletePost } from "../features/postState";

export default function Post({ id, content, editCB }: 
  { id: number, content: PostState, editCB: (number) => void }) {
  const dispatch = useAppDispatch();
  return (
    <>
      <h2 className='text-white'>Post #{id}: {content.title}</h2>
      <img src={content.imageURL} alt='' width='200' height='auto' className='bg-white'/>
      <div className='text-white'>{content.description}</div>
      <input type='button' value='Edit' onClick={() => editCB(id)} className='text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md px-4 py-2'/>
      <input type='button' value='Delete' onClick={() => dispatch(deletePost(id))} className='text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-md px-4 py-2'/>
    </>
  );
}
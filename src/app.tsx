import Introduction from "./components/intro";
import Posts from "./components/posts";

export default function App() {
  return (
    <>
      <Introduction />
      <hr className='w-11/12 h-1 mx-auto bg-gray-200 rounded my-4'/>
      <Posts />
    </>
  );
}

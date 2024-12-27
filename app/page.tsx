
import Link from 'next/link';

export default  function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl'>welcome to my page</h1>
      <div className='flex space-x-4'>
        <Link className='border m-2 p-2' href='/signin'>Sign in</Link>
        <Link className='border m-2 p-2' href='/signup'>Sign up</Link>
      </div>
    </div>
  );
}
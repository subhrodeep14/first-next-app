import axios from 'axios'

const response = await axios.get('http:localhost:3000/v1/details');

const data = response.data;
export default async function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      user page
      <div>
      {data.name}
      </div>
      {data.email}
      <div>
        {data.password}
      </div>
      

    </div>
  );
}
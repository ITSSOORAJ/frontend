import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
export async function loader({params}) {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/authors/${params.authorId}`);
    console.log(params.authorId)
    const  authD = response.data
    
    return {authD};
  }

function Authors(props)
    {
        const  {authD}= useLoaderData()
        //console.log(bookD.author.name)
        return(
            <main className="container mx-auto px-4">
  <section className="flex flex-col items-center justify-center py-20">
    <img className="shadow-lg shadow-cyan-500/50 h-64 w-96 object-cover rounded-lg" src={authD.image} alt="" />
    <div className="text-center mt-8">
      <h2 className="text-2xl font-bold">{authD.name}</h2>
      <p className='text-L font-italic mt-3'>{authD.details}</p>
    </div>
  </section>
</main>

    );
}
export default Authors;
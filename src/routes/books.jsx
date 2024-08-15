import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
export async function loader({params}) {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books/${params.bookId}`);
    console.log(params.bookId)
    const  bookD = response.data
    
    return {bookD};
  }

function Book(props)
    {
        const  {bookD}= useLoaderData()
        console.log(bookD.author.name)
        console.log(bookD.author._id)
        return(
            <main className='container px-4 mx-auto'>
               <section className='py-20 grid grid-cols-2   '>
                <img className=' shadow-lg shadow-cyan-500/50 h-29 ml-30' src ={bookD.coverpage} alt="" />
                <div className='flex flex-col justify-center md:text-center sm:text-center mr-30' >
                    <h2 className='text-2xl font-bold mb-4 sm pl-50 ml-10'>{bookD.title}</h2>
                    <span className='text-lg font-bold mb-5 ml-10'>by:
                      <Link to ={`/authors/${bookD.author._id}`}>{bookD.author.name}</ Link>
                    </span>
                    
                    <p className='md:text-center sm:text-center italic ml-7 '>{bookD.description}</p>
                    <div className='flex mt-9 ml-9'>
                    <button type="button" class="w-32 h-10 rounded font-bold italic  hover:text-white bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">
                    Buy
                    </button>
                    <button type="button" class="w-32 h=10 ml-2 rounded font-bold italic hover:text-white bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">
                    Rent
                    </button>
                    </div>
                </div>
               </section>
            </main>

    );
}
export default Book;
import React, { useState } from "react";
import Bookrack from "../components/bookrack"
import axios from 'axios' 
import { useLoaderData } from "react-router-dom";

export async function loader() {
    const response = await axios.get('http://localhost:3000/books');
    const books = response.data
    return { books };
  }

function Home(props)
{
    const {books} =useLoaderData()
    return(
        <main>
            
            <section className="py-20 ccontainer  px-4 mx-auto">
            <h2  className="text-2xl font-bold">RECOMENDED...</h2>

            <div className="grid grid-cols-4 gap-6 mt-8">
                {
                    books.map(book=>
                        {
                            return(
                                <Bookrack key={book._id} book={book} />

                            )
                        }
                    )
                }
            </div>
            </section> 
        </main>
    )
}

export default Home;
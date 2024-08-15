import React from "react";
import { Link } from "react-router-dom";

function Bookrack(props){
    const book =props.book
    console.log(book)
    return(
        <article className="shadow-sm bg-black  rounded-3xl shadow-lg shadow-cyan-500/50 rounded-2-xl">
            <Link to = {`/books/${book._id}`}>
            <img className="rounded-3xl object-contain" src  ={book.coverpage} />
            </Link>
            <h3 className="ml-5 text-white font-semibold">{book.title}</h3>
            <span className="ml-5 text-sm text-white font-italic">by, {book.author.name}</span>
            
        </article>
    )
}

export default Bookrack;
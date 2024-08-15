import React, { useState, useEffect } from "react";
import Bookrack from "../components/bookrack";
import axios from 'axios'
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books`);
  const books = response.data;
  return { books };
}

function Home(props) {
  const { books } = useLoaderData();
  const [themedBooks, setThemedBooks] = useState({});

  // Function to group books by theme efficiently
  const groupByTheme = (books) => {
    const themedBooks = books.reduce((acc, book) => {
      acc[book.theme] = acc[book.theme] || []; // Create array if theme doesn't exist
      acc[book.theme].push(book);
      return acc;
    }, {});
    setThemedBooks(themedBooks);
  };

  // Call groupByTheme on initial render and whenever books change
  useEffect(() => {
    groupByTheme(books);
  }, [books]);

  return (
 <body class="bg-grey-300">
    <main>
      <section className="py-20 container px-4 mx-auto">
        <h2 className="text-2xl font-bold">RECOMMENDED...</h2>

        {Object.keys(themedBooks).map((theme) => (
          <div key={theme} className="mt-8">
            <h3 className="text-3xl font-extrabold underline decoration-double mb-4 ml-10">{theme}</h3> {/* Subheading for each theme */}
            <div className="grid grid-cols-4 gap-6">
              {themedBooks[theme].map((book) => (
                <Bookrack key={book._id} book={book} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
    </body>
  );
}

export default Home;

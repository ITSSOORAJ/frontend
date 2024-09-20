import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLoginStatus } from "../routes/features/login/loginSlice";
import logout from "../routes/features/logout";

function Header(props) {
  const loggedin = useSelector(state => state.login.loggedIn);
  const user = useSelector(state => state.login.user);
  const dispatch = useDispatch();

  // State to store the first letter of email (if available)
  const [isLoading, setIsLoading] = useState(true);
  const [firstLetter, setFirstLetter] = useState(null);
  const handlelogout = async () => {
    console.log("HILL")
    try {
      await // Call the imported logout function (assumed to return a promise)
      dispatch(changeLoginStatus({ loggedIn: false, user: null }));
      localStorage.removeItem('token'); // Remove token from local storage
       // Navigate to home page
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout error (optional)
    }
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, { withCredentials: true })
      .then(response => {
        dispatch(changeLoginStatus({
          loggedIn: true,
          user: response.data
        }));
        setFirstLetter(response.data.email.charAt(0).toUpperCase());
        setIsLoading(false);
      })
      .catch(error => {
        dispatch(changeLoginStatus({
          loggedIn: false,
          user: null
        }));
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <header className="container mx-auto flex flex-row shadow-2xl justify-between items-center">
      <Link to="/">
        <h1 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          LIBTOX
        </h1>
      </Link>
      <nav>
        <ul className="flex flex-row gap-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <li>
            <Link to='about'>
                 About
                 </Link>
          </li>
          <li>
            <a href="#">NewsLetter</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            {loggedin ? (
              <Link to="/" onClick={handlelogout}>
              Logout
            </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>

      {loggedin && firstLetter && ( // Conditionally render with firstLetter check
        <div className="bg-gray-300 w-12 h-12 rounded-full flex flex-row items-center justify-center text-xl text-violet-600">
          <span>{firstLetter}</span>
        </div>
      )}
    </header>
  );
}

export default Header;

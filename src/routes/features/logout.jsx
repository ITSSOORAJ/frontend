import { useNavigate } from 'react-router-dom';

function logout() {
  const navigate = useNavigate();

  // Remove token from local storage
  localStorage.removeItem('token'); // Replace 'token' with your actual token key

  // Clear other user data if necessary
  // ...

  // Navigate to home page
  navigate('/');
}

export default logout;

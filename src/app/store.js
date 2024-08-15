import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../routes/features/login/loginSlice'
const preloadedState = {
  login: JSON.parse(localStorage.getItem('loginStatus')) || { loggedIn: false, user: null }
};
export default configureStore({
  reducer: {
    login: loginReducer
  },
  preloadedState
})
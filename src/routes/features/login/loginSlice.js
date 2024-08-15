import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false,
    user:null
  },
  reducers: {
     changeLoginStatus:(state,action) =>{
        state.loggedIn =action.payload.loggedIn
        state.user=action.payload.user
        //here loggedin is given as variable name rather than value which was the variable given on documentation of redux
        localStorage.setItem('loginStatus', JSON.stringify({
          loggedIn: action.payload.loggedIn,
          user: action.payload.user,
      }));
      }
    //change login status is a reducer who was called from backend of login when the user 
  }
})

// Action creators are generated for each case reducer function
export const {changeLoginStatus } = loginSlice.actions

export default loginSlice.reducer
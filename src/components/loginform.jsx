import { useForm } from "react-hook-form";
import Errorelement from "./errorelement";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../routes/features/login/loginSlice";
console.log(import.meta.env.VITE_API_BASE_URL)

function Loginform() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = data=>{
      axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`,data,{withCredentials:true})
      .then(response => {
        dispatch(changeLoginStatus({
          loggedIn:true,
          user:response.data
        }))
        alert(response.data.message)
        navigate('/home')})
        .catch(error =>{
            dispatch(changeLoginStatus({
              loggedIn:false,
              user:null
            }))
            alert("INVSLID CREDENTIALS!!!")
        console.log(error)})

        
    }

   // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="my-5 flex justify-center">
    <form className=' mt-8 flex flex-col gap-2 space-y-1' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      
      <label htmlFor="email"></label>
      <input className='mt-2 border border-violet-500 hover:border-black  py-2 rounded-sm w-64 text-center'  placeholder="Email-Id" {...register("email",{required:true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}  id="email" />
      {errors.email && <Errorelement field={'email'} type={errors.email.type} />}


      <label htmlFor="password"></label>
      <input className='mt-2 border  border-violet-500 hover:border-black py-2 rounded-sm text-center w-764'  type="password" placeholder="Password"  {...register("password",{required:true,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})}  id="password" />
      {errors.password && <Errorelement field={'password'} type={errors.password.type} />}
      <input className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded font-bold italic hover:text-white bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...
      ' type="submit" />
    </form>
    </div>

  );
}

export default Loginform;  
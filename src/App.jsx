
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

const App=()=>{
const[authValue,setAuthValue]=useState('')

  useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
          if(user){
            setAuthValue(user.displayName)
          }
          else{
            setAuthValue('')
          }
  })
  },[])

  return(
    <>
    <Routes>
      <Route path="/home" element={<Home name={authValue}/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>

    </>
  )
}

export default App;
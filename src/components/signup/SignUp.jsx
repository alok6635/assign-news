import { useState } from 'react';
import InputControl from '../InputControl/InputControl';
import style from '../login/Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../../Firebase';


const SignUp=()=>{

const[error,setError]=useState('');
const[inputData,setInputData]=useState(
    {
        name:'',
        email:'',
        password:''
    }
)

const navigate=useNavigate()

const handleInput=()=>{
    if(!inputData.name || !inputData.email || !inputData.password){
        setError('please fill all fields')
         return;
    }
    setError('')
console.log(inputData);

createUserWithEmailAndPassword(auth,inputData.email,inputData.password)
.then(async(res)=>{
  console.log(res);
  await updateProfile(res.user,{displayName:inputData.name})
  navigate('/home')
}).catch((error)=>{
    console.log(error.message);
 setError(error.message)
})


}

    return(
        <>
        <div className={style.container}>
                <div className={style.innerBox}>
                    <h1 className={style.heading}>
                       Signup
                    </h1>
                    <InputControl type="text" label="name" placeholder="Enter your name"  onChange={(e)=>setInputData((prev)=>({...prev,name:e.target.value}))}/>
                    <InputControl type="email" label="email" placeholder="Enter your email" onChange={(e)=>setInputData((prev)=>({...prev,email:e.target.value}))}/>
                    <InputControl  type="text" label="password" placeholder="Enter your password" onChange={(e)=>setInputData((prev)=>({...prev,password:e.target.value}))}/>
                    <div className={style.footer}>
                        <b className={style.error}>{error}</b>
                        <button onClick={handleInput}>signup</button>
                        <p>
                            Allready have a account ?
                            <span>
                                <Link to="/">login</Link>
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SignUp;
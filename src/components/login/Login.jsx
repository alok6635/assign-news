import { signInWithEmailAndPassword } from 'firebase/auth';
import InputControl from '../InputControl/InputControl';
import style from './Login.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';


const Login =(props)=> {
    const[error,setError]=useState('');
    const[inputData,setInputData]=useState(
        {
            email:'',
            password:''
        }
    )
    
    const navigate=useNavigate()
    
    const handleInput=()=>{
        if( !inputData.email || !inputData.password){
            setError('please fill all fields')
             return;
        }
        setError('')
    console.log(inputData);
    
    signInWithEmailAndPassword(auth,inputData.email,inputData.password)
    .then(async(res)=>{
      console.log(res);
      navigate('/home')
    }).catch((error)=>{
        console.log(error.message);
     setError(error.message)
    })
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.innerBox}>
                    <h1 className={style.heading}>
                        Login
                        </h1>
                    <InputControl type="email" label="email" placeholder="Enter your email" onChange={(e)=>setInputData((prev)=>({...prev,email:e.target.value}))}/>
                    <InputControl  type="password" label="password" placeholder="Enter your password" onChange={(e)=>setInputData((prev)=>({...prev,password:e.target.value}))}/>
                    <div className={style.footer}>
                    <b className={style.error}>{error}</b>
                        <button onClick={handleInput}>Login</button>
                        <p>
                            Allready have a account ?
                            <span>
                                <Link to="/signup">Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>

            </div>
</>
    )
}

export default Login;
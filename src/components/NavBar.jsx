import { signOut } from "firebase/auth";
import {auth} from '../Firebase';
import { useNavigate } from "react-router-dom";
import style from './NavBar.module.css'


const NavBar=(props)=>{

  let navigate = useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(() => {
      console.log('signout succes');
      navigate('/')
    }).catch((error) => {
    });
  }
  
  console.log(props);
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid newNav">
    <a className="navbar-brand" href="#">News-app</a>
  </div>
  <div className="welcome">
  {props.name? `welcome ${props.name}`: 'Login please'}

  </div>
<button onClick={handleSignout} className={style.logoutBtn} >Logout</button>
</nav>

        </>
    )

}

export default NavBar;
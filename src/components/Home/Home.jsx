import { useState } from "react";
import NavBar from "../NavBar";
import News from "../news/News";
import style from './Home.module.css';


const Home=(props)=>{

    const [toogle,setToggle] = useState(true);

    const changeToggle = () =>{
        console.log(111);
        setToggle(!toogle)
    }
    console.log(props);
    return(
        <>
  <NavBar name={props.name}/>
  <div className={style.flexRight}>
  <button className="btn  toogleBtn"  onClick={changeToggle}>Toggle grid</button>
  </div>

<News tootleState= {toogle}/>
        </>
        
    )
}

export default Home;
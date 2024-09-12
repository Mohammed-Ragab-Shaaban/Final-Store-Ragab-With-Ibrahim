import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderStateContext } from "../../Context";


export default function LoginAndRegister(props) {

  const {token,setToken} = useContext(HeaderStateContext);
  const {sideList, setSideList} = useContext(HeaderStateContext);
  
  

  const sty ={
    textDecoration: "none",
  }


  return (
    <div className={JSON.parse(localStorage.getItem("token")) ? "d-none" : "d-block"}>
      <div className={sideList ? props.p_db + " d-md-block" : "d-none d-md-block"}>
        <button className={sideList ? "btnstyInSmall" : "btnstyInLarge"}> <Link style={sty} to={"/login"}>login</Link></button> 
        <button className={sideList ? "btnstyInSmall" : "btnstyInLarge"}> <Link style={sty} to={"/register"}>Register</Link></button>  
      </div>
    </div>
  )
}




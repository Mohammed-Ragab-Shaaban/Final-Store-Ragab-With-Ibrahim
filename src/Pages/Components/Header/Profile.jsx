import { faL, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useReducer, useRef, useState } from "react";
import { HeaderStateContext } from "../Context";
import LogOut from "./LogOut";
import { createRoot } from "react-dom/client";
import { Link, useNavigate } from "react-router-dom";


export default function Profile(props) {

    const {sideList, setSideList,ren , setRen,image , setImage} = useContext(HeaderStateContext);
    const [profileStatus , setProfileStatus] = useState(false);
    // const [ren , setRen] = useReducer(x => x + 1 , 0);
    const navigat = useNavigate();


const removeToken = (e)=>{
    localStorage.removeItem("token");
    navigat("/login")
    // window.forceUpdate();
    setRen();
    }

    const profileRef = useRef();
    
    const profileToggle = ()=>{
      if(profileStatus == false){
        setProfileStatus(true);
      }else{
        setProfileStatus(false);
      }
    }

    const btnProfileStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid var(--bgGreen)",
        color: "var(--bgGreen)",
    }
   
  return (
    <div className={JSON.parse(localStorage.getItem("token")) ? "d-block" :"d-none"}>
        <div className={sideList ? props.P_LogOut  : "d-none d-md-block"}>
            <div className="position-relative">
                <div className="text-center p-2 p-md-0">
                    <button onClick={profileToggle} className="rounded-circle overflow-hidden" style={btnProfileStyle}>
                        {
                            image ? <img src={URL.createObjectURL(image)} style={{width:"35px",cursor:"pointer"}}/> :  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        }
                       
                    </button>
                </div>
                <div ref={profileRef} style={profileStatus ? {display:"block"} : {display :"none"}} className={sideList ? "profilePageSmall" : "profilePageLarge"}>
                    <div className="position-relative">
                        <ul className={sideList ? "profilePageUlSmall" : "profilePageUlLarge"}>
                            <li><Link onClick={()=>{setProfileStatus(false);}} to={'/userProfile'} style={{color:"black",textDecoration:"none"}}>Profile</Link></li>
                            <li onClick={(e)=>{removeToken(e), setProfileStatus(false)}}>Log out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

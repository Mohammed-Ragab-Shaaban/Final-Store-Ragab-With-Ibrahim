import { faL, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useReducer, useRef, useState } from "react";
import { HeaderStateContext } from "../Context";
import LogOut from "./LogOut";
import { createRoot } from "react-dom/client";


export default function Profile(props) {

    const {sideList, setSideList,ren , setRen} = useContext(HeaderStateContext);
    const [profileStatus , setProfileStatus] = useState(false);
    // const [ren , setRen] = useReducer(x => x + 1 , 0);
    // const [ren , setRen] = useReducer(x => x + 1 , 0);
    // const [tokenStatus , setTokenStatus] = useState(false);


    // const removeToken = ()=>{
    //     if(tokenStatus){
    //         setTokenStatus(true);
    //     }else{
    //         localStorage.removeItem("token");
    //         setTokenStatus(false);
    //     }
    // }
const removeToken = ()=>{
    localStorage.removeItem("token");
    // const root = createRoot(<Profile/>);
    // root.render(<Profile />)
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
                    <button onClick={profileToggle} className="rounded-circle" style={btnProfileStyle}>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </button>
                </div>
                <div ref={profileRef} style={profileStatus ? {display:"block"} : {display :"none"}} className={sideList ? "profilePageSmall" : "profilePageLarge"}>
                    <div className="position-relative">
                        <ul className={sideList ? "profilePageUlSmall" : "profilePageUlLarge"}>
                            <li>Profile</li>
                            <li onClick={removeToken}>Log out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

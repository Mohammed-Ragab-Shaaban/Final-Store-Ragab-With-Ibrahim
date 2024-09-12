import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { HeaderStateContext } from "../../Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Cart() {

  const {orderCount,setOrderCount,token,setToken,Totalcount,setTotalCount} = useContext(HeaderStateContext);
  const navToBuy = useNavigate();
  const navToLogin = useNavigate();

  const chckToken =()=>{
    let tok = JSON.parse(localStorage.getItem("token"));
    if(tok){
      navToBuy("/buyPage")
    }else{
      navToLogin("/login");
    }
  }
  console.log(token)

  const btnBuyStyle = {
    border: "none",
    backgroundColor: "var(--bgGreen)",
    color: "var(--white)",
    padding: "2px 7px",
    borderRadius: "5px",
  }

  return (
    <div className="d-flex gap-1 align-items-center" style={{color:"var(--bgGreen)"}}>
      <div style={{color:"var(--bgGreen)"}} >
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </div>
        <span>{Totalcount}</span>
        <button style={btnBuyStyle} onClick={chckToken}>Buy</button>
    </div>
  )
}

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCar, faRecycle, faSave } from '@fortawesome/free-solid-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons/faContactCard'


export default function Section2Components(props) {
    const styLink={
        textDecoration : "none",
        color: "#FFF"
    }

  return (
    <div className="d-flex py-2 px-5 text-white gap-2" style={{backgroundColor:"rgba(255,255,255,.1)",minWidth: "275px"}}>
        <div style={{color:"var(--lightGreen)",fontSize:"1.2rem"}}><FontAwesomeIcon icon={props.ii}></FontAwesomeIcon></div>
        <div>
            <Link to={'#'} style={styLink}><h5>{props.a}</h5></Link>
            <p>{props.span}</p>
        </div>
    </div>
  )
}

 




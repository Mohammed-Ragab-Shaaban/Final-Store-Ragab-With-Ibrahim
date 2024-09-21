import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section1 from "./Section1";
import "./HomePage.css";
import Section2 from "./Section2";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Section1 />
      <Section2 />
      {/* <div>
            {
              [...Array(5)].map((el,index)=>{
               
                return(
                  <>
                      <FontAwesomeIcon style={rate <= 3 && rate >! 3 ? {backgroundColor:"yellow"} : null} onClick={()=>{ const rt = index+1; setRate (rt);}} icon={faStar}></FontAwesomeIcon>
                  </>
                )
              })
              
            }
          </div> */}
    </div>
  );
}

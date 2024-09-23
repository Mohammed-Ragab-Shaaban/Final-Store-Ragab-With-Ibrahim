import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useContext, useEffect } from "react"
import { HeaderStateContext } from "../Context"

export default function UserProfilePage() {


    const {token,setToken,userData , setUserData} = useContext(HeaderStateContext);
    console.log(userData);

    // useEffect(()=>{
    //     axios.post("http://localhost:1337/api/auth/local",token).then((res)=>{

    //         console.log(res);
    //     }).catch((err)=>{

    //     });


    // },[])
   

  return (
    <div style={{height:"90vh",position:"relative"}}>
        <div style={{height:"45vh" , backgroundColor:"black" ,position:"absolute",width:"100%",zIndex:"0"}}>
        </div>
        <div className="container position-relative" style={{top:"20%",zIndex:1}}>
                <div className="userDetails ">
                    <div className="d-flex justify-content-around" style={{height:"100px"}}>
                         <div className="align-self-center">
                             <button>
                                <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon> contact
                            </button>
                        </div> 
                        <div className="userImage"></div>
                         <div className="align-self-center">
                             <button type="file">
                               
                                <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon> Upload
                            </button>
                        </div> 
                    </div>
                    <div className="text-center">
                        <h2>Hello</h2>
                        <h3>{userData.user.firstName}</h3>          
                    </div>
                    <div>
                       <table className="table table-bordered w-75 m-auto rounded table-hover">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{userData.user.firstName}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{userData.user.lastName}</td>
                            </tr>
                            <tr>
                                <td>User Name</td>
                                <td>{userData.user.username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userData.user.email}</td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                       </table>
                    </div>
                </div>
         </div>
    </div>
  )
}
